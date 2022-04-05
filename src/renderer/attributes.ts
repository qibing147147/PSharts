import { Attributes, AssignmentAttributes } from './interface'

const assignmentAttrs = ['lineWidth', 'strokeStyle', 'fillStyle', 'lineDashOffset']

export function applyAttributes(ctx: CanvasRenderingContext2D, attributes: Attributes): void {
  for (const [key, value] of Object.entries(attributes)) {
    if (key in assignmentAttrs) {
      ctx[key as keyof AssignmentAttributes] = value
    }
    if (key === 'lineDash') {
      ctx.setLineDash(value)
    }
  }
}
