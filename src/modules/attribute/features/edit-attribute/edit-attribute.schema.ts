import { z } from "zod";

import { ATTRIBUTE_TYPE_CODES } from "../../domain";

export const editAttributeSchema = z.object({
  slug: z.string().min(1),
  type: z.enum(ATTRIBUTE_TYPE_CODES),
  label: z.string().trim().min(1),
});

export type EditAttributeInput = z.infer<typeof editAttributeSchema>;
