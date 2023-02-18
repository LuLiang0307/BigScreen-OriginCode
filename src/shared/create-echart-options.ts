import { baseEchartOptions } from "./base-echart-options"
import { px } from "./px"

export const createEchartOptions = (options)=>{
  const result = {
    ...baseEchartOptions,
    ...options
  }
  if(!(options?.xAxis?.axisLabel?.fontSize)){
    result.xAxis = options.xAxis || {}
    result.xAxis.axisLabel = options.xAxis.axisLabel || {}
    result.xAxis.axisLabel.fontSize = px(12)
  }
  if(!(options?.yAxis?.axisLabel?.fontSize)){
    result.yAxis = options.yAxis || {}
    result.yAxis.axisLabel = options.yAxis.axisLabel || {}
    result.yAxis.axisLabel.fontSize = px(12)
  }
  return result
}