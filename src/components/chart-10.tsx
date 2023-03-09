import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { createEchartOptions } from '../shared/create-echart-options';

export const Chart10 = () => {
  const divRef = useRef(null);
    useEffect(() => {
    var myChart = echarts.init(divRef.current);
    
  }, []);

  return (
    <div className="类型统计-图1">
      <div className="chart" ref={divRef}>
      </div>
    </div>
  )
}