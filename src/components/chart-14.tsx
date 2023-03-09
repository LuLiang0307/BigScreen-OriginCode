import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { createEchartOptions } from '../shared/create-echart-options';

export const Chart14 = () => {
  const divRef = useRef(null);
    useEffect(() => {
    var myChart = echarts.init(divRef.current);
    
  }, []);

  return (
    <div className="bordered 手段分析">
      <h2>作案手段分析</h2>
      <div className="chart" ref={divRef}>
      </div>
    </div>
  )
}