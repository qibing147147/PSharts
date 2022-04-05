import { Group } from 'konva/lib/Group'
import { Layer } from 'konva/lib/Layer'
import { Shape, ShapeConfig } from 'konva/lib/Shape'
import { Stage } from 'konva/lib/Stage'

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
