import { Layer } from 'konva/lib/Layer'
import { Line } from 'konva/lib/shapes/Line'
import { Stage } from 'konva/lib/Stage'

export interface Context {
  node: Stage
  group: Layer
}

export type TypeString = 'line'

export type ShapeOptions = Line
