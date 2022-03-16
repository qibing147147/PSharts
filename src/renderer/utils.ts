import { Attributes } from "./interface"

export function createCanvasElement(width:number, height:number):HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  return canvas
}

export function applyAttributes(ctx: CanvasRenderingContext2D, attributes: CanvasRenderingContext2D): void {
  for (const [key, value] of Object.entries(attributes)) {
    ctx[key] = value
  }
}