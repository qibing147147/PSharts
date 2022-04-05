import { Line } from 'konva/lib/shapes/Line'
import { createContext } from './context'
import { LineAttributes } from './interface'
import { line } from './shape'

export function createRenderer(width: number, height: number, id: HTMLDivElement | string) {
  const context = createContext(width, height, id)
  return {
    line: (options: Line) => line(context, options),
    node: () => context.node,
    group: () => context.group
  }
}
