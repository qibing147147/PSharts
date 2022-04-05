import { Attributes, Context, LineAttributes } from './interface'
import { applyAttributes } from './attributes'
import { Line } from 'konva/lib/shapes/Line'

export function shape(type: string, context: Context, attributes: Attributes) {
  applyAttributes(ctx, attributes)
}

export function line(context: Context, attributes: Line) {
  const { group } = context
  applyAttributes(ctx, attributes)
  ctx.save()
  ctx.moveTo(range[0][0], range[0][1])
  ctx.lineTo(range[1][0], range[1][1])
  ctx.stroke()
  ctx.restore()
}
