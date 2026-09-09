import { z } from "zod";
import { ATTRIBUTE_TYPE_CODES } from "../consts";

export const createAttributeSchema = z.object({
  label: z.string().trim().min(1),
  type: z.enum(ATTRIBUTE_TYPE_CODES),
});
