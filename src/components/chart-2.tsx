import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartOptions } from '../shared/create-echart-options';
import { px } from '../shared/px';

export const Chart2 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    const myEchart = echarts.init(divRef.current)
    myEchart.setOption(createEchartOptions({
      legend:{
        data: ['破案排名1','破案排名2'],
        bottom: px(10),
        textStyle: {color: 'white'},
        itemWidth: px(30),
        itemHeight: px(16)
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: { show: false },
        axisLabel: {
          show: false,
        }
      },
      yAxis: {
        axisTick: { show: false },
        type: 'category',
        data: ['城关区公安局', '七里河区公安局', '西固区公安局', '安宁区公安局', '红古区公安局', '永登县公安局', '皋兰县公安局', '榆中县公安局', '新区公安局'],
        axisLabel: {
          formatter(val) {
            return val.replace('公安局', '\n公安局');
          }
        }
      },
      series: [
        {
          name: '破案排名1',
          type: 'bar',
          data: [1, 4, 4.5, 4.5, 6.5, 4, 8, 6, 8],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#2034f9'
              }, {
                offset: 1,
                color: '#04a1ff'
              }]),
            }

          }
        },
        {
          name: '破案排名2',
          type: 'bar',
          data: [2.5, 3, 5, 4, 5, 7.5, 7.5, 9, 10],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#b92ae8'
              }, {
                offset: 1,
                color: '#6773e7'
              }]),
            }
          }
        }
      ]
    }))
  }, [])
  return (
    <div className='bordered 破获排名'>
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart" />
      {/* <div className="legend">
        <span className="first" /> 破案排名1
        <span className="second" /> 破案排名2
      </div> */}
    </div>
  )
}