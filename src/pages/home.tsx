import React, { useDebugValue, useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/header.jpg'
import {Chart1} from '../components/chart-1'
import {Chart2} from '../components/chart-2'

export const Home = () => {


  return (
    <div className='home'>
      <div className="header" style={{ backgroundImage: `url(${headerBg})` }}></div>
      <main>
        <section className='section1'>
          <Chart1 />
          <Chart2 />
        </section>
        <section className='bordered section2'>
        </section>
        <section className='bordered section3'></section>
        <section className='bordered section4'></section>
        <section className='bordered section5'></section>
      </main>
    </div>
  );
};
