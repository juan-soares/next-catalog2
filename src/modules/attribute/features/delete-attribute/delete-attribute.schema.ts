import z from "zod";
import { ATTRIBUTE_TYPE_CODES } from "../../domain";

export const deleteAttributeSchema = z.object({
  slug: z.string().min(1),
  type: z.enum(ATTRIBUTE_TYPE_CODES),
});
