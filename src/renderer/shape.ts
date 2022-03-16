import { Context } from "./interface";
import { applyAttributes } from "./utils";

export function shape(type, context:Context, attributes: any) {
  const { ctx } = context
  applyAttributes(ctx, attributes)
}