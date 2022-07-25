import { Context, MyRectConfig, ShapeNameMap, ShapeOptions, TypeString } from './type'
import { Line, LineConfig } from 'konva/lib/shapes/Line'
import { createShape, mount } from './utils'
import { CircleConfig } from 'konva/lib/shapes/Circle'
import { Shape } from 'konva/lib/Shape'
import { Rect, RectConfig } from 'konva/lib/shapes/Rect'

export function shape<K extends keyof ShapeNameMap>(
  type: K,
  context: Context,
  options: ShapeOptions[K]
): ShapeNameMap[K] {
  const { group } = context
  const shape = createShape(type, options)
  mount(group, shape)
  return shape
}

export function line(context: Context, options: LineConfig): Line<LineConfig> {
  return shape('line', context, options)
}

export function circle(context: Context, options: CircleConfig): Shape<CircleConfig> {
  return shape('circle', context, options)
}

export function rect(context: Context, options: MyRectConfig): Shape<MyRectConfig> {
  const { width, height, x, y } = options
  return shape('rect', context, {
    ...options,
    width: Math.abs(width),
    height: Math.abs(height),
    x: width > 0 ? x : x + width,
    y: height > 0 ? y : y + height
  })
}
