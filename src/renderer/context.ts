import { Context } from './type'
import { mount } from './utils'
import Konva from 'konva'

export function createContext(width: number, height: number, id: HTMLDivElement | string): Context {
  const stage = new Konva.Stage({
    container: id,
    width,
    height
  })
  const layer = new Konva.Layer()
  mount(stage, layer)
  return {
    node: stage,
    group: layer
  }
}
