import { Context, ShapeNameMap, ShapeOptions, TypeString } from './type'
import { Line, LineConfig } from 'konva/lib/shapes/Line'
import { createShape, mount } from './utils'

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

export function line(context: Context, options: LineConfig): any {
  return shape('line', context, options)
}
