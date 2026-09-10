import z from "zod";
import { ATTRIBUTE_TYPE_CODES } from "@/modules/attribute/consts";

export const deleteAttributeSchema = z.object({
  id: z.string().min(1),
  type: z.enum(ATTRIBUTE_TYPE_CODES),
});
