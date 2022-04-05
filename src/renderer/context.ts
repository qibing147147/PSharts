import { Context } from './interface'
import { mount } from './utils'
import Konva from 'konva'

export function createContext(width: number, height: number, id: HTMLDivElement | string): Context {
  const stage = new Konva.Stage({
    container: id,
    width,
    height
  })
  const layer = new Konva.Layer()
  return {
    node: stage,
    group: layer
  }
}
