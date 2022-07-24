import { Layer } from 'konva/lib/Layer'
import { Circle, CircleConfig } from 'konva/lib/shapes/Circle'
import { Line, LineConfig } from 'konva/lib/shapes/Line'
import { Stage } from 'konva/lib/Stage'

export interface Context {
  node: Stage
  group: Layer
}

export interface ShapeNameMap {
  line: Line
  circle: Circle
}

export type TypeString = keyof ShapeNameMap

export interface ShapeOptions {
  line: LineConfig
  circle: CircleConfig
}
