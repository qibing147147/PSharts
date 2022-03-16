import { createContext } from "./context";

export function createRenderer(width: number, height: number) {
  const context = createContext(width, height)
  return {
    line: (options: any) => line(context, options),
    node: () => context.node,
    ctx: () => context.ctx
  }
}