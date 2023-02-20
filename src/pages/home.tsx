import React, { useDebugValue, useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/header.jpg'
import {Chart1} from '../components/chart-1'
import {Chart2} from '../components/chart-2'
import {Chart3} from '../components/chart-3'
import {Chart4} from '../components/chart-4'
import {Chart5} from '../components/chart-5'

export const Home = () => {
  const year = new Date().getFullYear();

  return (
    <div className='home'>
      <header style={{ backgroundImage: `url(${headerBg})` }}></header>
      <main>
        <section className='section1'>
          <Chart1 />
          <Chart2 />
        </section>
        <section className='section2'>
          <Chart3 />
          <Chart4 />
        </section>
        <section className='bordered section3'>
          <Chart5 />
        </section>
        <section className='bordered section4'></section>
        <section className='bordered section5'></section>
      </main>
      <footer>
        大屏数据平台利用大数据技术采集犯罪作案信息是一套实时监控的数据系统Copyright&copy; {year}兰州市公安局
      </footer>
    </div>
  );
};
