import { Context } from "./interface";
import { createCanvasElement } from "./utils";

export function createContext(width:number, height:number):Context {
  const canvas = createCanvasElement(width, height)
  const context = canvas.getContext('2d')!
  return {
    node: canvas,
    ctx: context
  }
}