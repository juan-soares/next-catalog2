import z from "zod";
import { ATTRIBUTE_TYPE_CODES } from "../consts";

export const deleteAttributeSchema = z.object({
  id: z.string().min(1),
  typeCode: z.enum(ATTRIBUTE_TYPE_CODES),
});
