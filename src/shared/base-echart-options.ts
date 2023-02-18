import {px} from './px';

export const baseEchartOptions = {
    textStyle: {
      fontSize: px(12),
      color: '#79839E'
    },
    title: {show: false},
    legend: {show: false},
    grid: {
      left: px(20),
      right: px(20),
      bottom: px(20),
      top: px(20),
      containLabel: true
    }
}