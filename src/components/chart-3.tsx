import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartOptions } from '../shared/create-echart-options';
import { px } from '../shared/px';

export const Chart3 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    const myEchart = echarts.init(divRef.current)
    myEchart.setOption(createEchartOptions({
      legend: {
        bottom: px(10),
        textStyle: {color: 'white'},
        itemWidth: px(30),
        itemHeight: px(16)
      },
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(70),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        axisTick: {show: false},
        axisLine: {show: false},
        splitLine: {show:true, lineStyle: {color: '#073E78'}}
      },
      yAxis: {
        type: 'value',
        boundaryGap: false,
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter: function (value) {
            return (value*100) + '%';
          }
        }
      },
      series: [
        {
          name: '抢劫',
          type: 'line',
          data:  [0.1, 0.12, 0.23, 0.24, 0.25, 0.16, 0.27, 0.18, 0.4]
        },
        {
          name: '醉驾',
          type: 'line',
          data:  [0.2, 0.3, 0.33, 0.15, 0.16, 0.17, 0.18, 0.19, 0.1]
        },
        {
          name: '盗窃',
          type: 'line',
          data:  [0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19]
        },
        {
          name: '故意伤人',
          type: 'line',
          data:  [0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29]
        }
      ].map(obj =>({
        ...obj,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)}
      }))
    }))
  }, [])
  return (
    <div className='bordered 发案趋势'>
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  )
}