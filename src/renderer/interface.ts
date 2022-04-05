import { Layer } from 'konva/lib/Layer'
import { Stage } from 'konva/lib/Stage'

export interface Context {
  node: Stage
  group: Layer
}

export interface AssignmentAttributes {
  lineWidth?: number
  fillStyle?: string | CanvasGradient | CanvasPattern
  strokeStyle?: string | CanvasGradient | CanvasPattern
}

export interface Attributes extends AssignmentAttributes {
  lineDash?: number[]
  lineDashOffset?: number
}

export interface LineAttributes extends Attributes {
  range: [[number, number], [number, number]]
}
