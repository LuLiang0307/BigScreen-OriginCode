import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartOptions } from '../shared/create-echart-options';
import { px } from '../shared/px';

export const Chart4 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(divRef.current)
    myChart.setOption(createEchartOptions({
      xAxis: {
        type: 'category',
        data: ['02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24'],
        splitLine: { show: true, lineStyle: { color: '#073E78' } },
        boundaryGap: false,
        axisTick: { show: false },
        axisLine: { show: false },
      },
      yAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: '#073E78' } },
        axisLabel: {
          formatter(value) {
            return value * 100 + '%'
          }
        }
      },
      series: [
        {
          data: [0.15, 0.13, 0.12, 0.11, 0.10, 0.12, 0.3, 0.36, 0.40, 0.37, 0.33, 0.29],
          type: 'line',
          symbol: 'circle',
          symbolSize: px(12),
          lineStyle: {width: px(2)},
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#414a9f'
            }, {
              offset: 1,
              color: '#1b1d52'
            }]),
          },
        }
      ]
    }))
  }, [])
  return (
    <div className='bordered 时段分析'>
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  )
}