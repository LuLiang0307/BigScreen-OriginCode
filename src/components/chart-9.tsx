import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import china from '../geo/china.js';
import { createEchartOptions } from '../shared/create-echart-options';

export const Chart9 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myEchart = echarts.init(divRef.current);
  }, []);

  return (
    <div className='年龄分布-图3'>
      <div ref={divRef} className="chart" />
      9
    </div>
  )
}