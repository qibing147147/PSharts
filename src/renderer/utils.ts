import { Group } from 'konva/lib/Group'
import { Layer } from 'konva/lib/Layer'
import { Shape, ShapeConfig } from 'konva/lib/Shape'
import { Stage } from 'konva/lib/Stage'
import Konva from 'konva'
import { ShapeNameMap, ShapeOptions, TypeString } from './type'
import { Line, LineConfig } from 'konva/lib/shapes/Line'
import { Circle, CircleConfig } from 'konva/lib/shapes/Circle'

const shapeConstructorMap = {
  line: Konva.Line,
  circle: Konva.Circle,
  rect: Konva.Rect
}
interface shapeConstructorMapType {
  line: Line<LineConfig>
  circle: Shape<CircleConfig>
}

export function createCanvasElement(width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  return canvas
}

export function mount(parent: Stage | Layer, child: Layer & (Group | Shape<ShapeConfig>)) {
  if (parent) {
    parent.add(child)
  }
}

// TODO: shape的返回类型问题
export function createShape<K extends keyof ShapeNameMap>(type: K, options: ShapeOptions[K]): any {
  return new shapeConstructorMap[type](options)
}
