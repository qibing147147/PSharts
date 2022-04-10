import { Context, ShapeOptions, TypeString } from './type'
import { Line } from 'konva/lib/shapes/Line'
import { createShape, mount } from './utils'

export function shape(type: TypeString, context: Context, options: ShapeOptions): any {
  const { group } = context
  const shape = createShape(type, options)
  mount(group, shape)
  return shape
}

export function line(context: Context, options: Line): any {
  return shape('line', context, options)
}
