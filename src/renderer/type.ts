import { Layer } from 'konva/lib/Layer'
import { Circle, CircleConfig } from 'konva/lib/shapes/Circle'
import { Line, LineConfig } from 'konva/lib/shapes/Line'
import { Rect, RectConfig } from 'konva/lib/shapes/Rect'
import { Stage } from 'konva/lib/Stage'

export interface Context {
  node: Stage
  group: Layer
}

export interface ShapeNameMap {
  line: Line
  circle: Circle
  rect: Rect
}

export type TypeString = keyof ShapeNameMap

export interface MyRectConfig extends RectConfig {
  width: number
  height: number
  x: number
  y: number
}

export interface ShapeOptions {
  line: LineConfig
  circle: CircleConfig
  rect: MyRectConfig
}
