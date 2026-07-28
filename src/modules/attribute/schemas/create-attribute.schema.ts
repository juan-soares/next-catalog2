import { z } from "zod";
import { ATTRIBUTE_TYPE_KEYS } from "../consts";

export const createAttributeSchema = z.object({
  label: z.string().min(1),
  attributeType: z.enum(ATTRIBUTE_TYPE_KEYS),
});
