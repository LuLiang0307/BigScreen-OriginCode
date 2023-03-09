import React, { useDebugValue, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { baseEchartOptions } from '../shared/base-echart-options';
import { createEchartOptions } from '../shared/create-echart-options';

export const Chart1 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    const myChart = echarts.init(divRef.current)
    myChart.setOption(createEchartOptions({
      ...baseEchartOptions,
      xAxis: {
        type: 'category',
        data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区', '皋兰区', '榆中区', '兰州新区'],
        axisLabel: {
          margin: 3,
          formatter(val) {
            if (val.length > 2) {
              //这里不能写成一行，返回的内容不正确
              const array = val.split('')
              array.splice(2, 0, '\n')
              return array.join('')
            } else {
              return val
            }
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#083B70'
          }
        },
      },
      yAxis: {
        axisLabel: {
          margin:3
        },
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {
            color: '#0a5299'
          }
        },
       
      },
      series: [{
        type: 'bar',
        data: [40, 30, 25, 18, 23, 14, 20, 28, 40]
      }]
    }))
  }, [])

  return (
    <div className='bordered 管辖统计'>
    <h2>案发派出所管辖统计</h2>
    <div ref={divRef} className='chart'></div>
  </div>
  )
};