import React, { useDebugValue, useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/header.jpg'
import * as echarts from 'echarts';

const px = (n) => n / 2420 * (window as any).pageWidth

export const Home = () => {
  const divRef = useRef(null)
  useEffect(() => {
    const myEchart = echarts.init(divRef.current)
    myEchart.setOption({
      textStyle: {
        fontSize: px(12)
      },
      xAxis: {
        type: 'category',
        data: ['城关区', '七里河区', '西固区', '安宁区', '红谷区', '永登区', '皋兰区', '榆中区', '兰州新区'],
        axisLabel: {
          fontSize: px(12),
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
            color: '#0a5299'
          }
        },
      },
      grid: {
        left: px(40),
        right: px(40),
        bottom: px(40),
        top: px(40)
      },
      yAxis: {
        axisLabel: {
          fontSize: px(12),
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
    })
  }, [])

  return (
    <div className='home'>
      <div className="header" style={{ backgroundImage: `url(${headerBg})` }}></div>
      <main>
        <section className='section1'>
          <div className='bordered 管辖统计'>
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className='chart'></div>
          </div>
        </section>
        <section className='bordered section2'></section>
        <section className='bordered section3'></section>
        <section className='bordered section4'></section>
        <section className='bordered section5'></section>
      </main>
    </div>
  );
};
