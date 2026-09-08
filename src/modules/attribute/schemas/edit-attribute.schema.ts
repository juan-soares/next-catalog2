import { z } from "zod";
import { ATTRIBUTE_TYPE_CODES } from "../consts";

export const editAttributeSchema = z.object({
  id: z.string().trim().min(1),
  label: z.string().trim().min(1),
  type: z.enum(ATTRIBUTE_TYPE_CODES),
});

export type EditAttributeInput = z.infer<typeof editAttributeSchema>;
