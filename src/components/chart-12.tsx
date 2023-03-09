import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { createEchartOptions } from '../shared/create-echart-options';

export const Chart12 = () => {
  const divRef = useRef(null);
    useEffect(() => {
    var myChart = echarts.init(divRef.current);
    
  }, []);

  return (
    <div className="街道类型-图1">
      <div className="chart" ref={divRef}>
      </div>
    </div>
  )
}