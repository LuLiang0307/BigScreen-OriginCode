import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { createEchartOptions } from '../shared/create-echart-options';
import { px } from '../shared/px';

export const Chart2 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null);
  const data = [
    { name: '城关区公安局', 2011: 1, 2012: 2.5 },
    { name: '七里河区公安局', 2011: 4, 2012: 3 },
    { name: '西固区公安局', 2011: 4.5, 2012: 5 },
    { name: '安宁区公安局', 2011: 4.5, 2012: 4 },
    { name: '红古区公安局', 2011: 6.5, 2012: 5 },
    { name: '永登县公安局', 2011: 4, 2012: 7.5 },
    { name: '皋兰县公安局', 2011: 8, 2012: 7.5 },
    { name: '榆中县公安局', 2011: 6, 2012: 9 },
    { name: '新区公安局', 2011: 8, 2012: 10 },
  ];
  useEffect(() => {
    setInterval(()=>{
      let newData = []
      data.map(i => {
      let  obj ={name: '',2011: null,2012: null}
      obj.name = i.name
        obj[2011] = Math.random()*10
        obj[2012] = Math.random()*10
        newData.push(obj)
      })
      x(newData)
    },3000)
  }, [])
  const x = (data) => {
    myChart.current.setOption(createEchartOptions({
      legend: {
        data: ['破案排名1', '破案排名2'],
        bottom: px(10),
        textStyle: { color: 'white' },
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
        data: data.map(i => i.name),
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
          data: data.map(i => i['2011']),
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
          data: data.map(i => i['2012']),
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
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);
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