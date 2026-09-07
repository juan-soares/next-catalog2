import { z } from "zod";

import { ATTRIBUTE_TYPE_CODES } from "@/modules/attribute/domain";

export const createAttributeSchema = z.object({
  type: z.enum(ATTRIBUTE_TYPE_CODES),
  label: z.string().trim().min(1),
});

export type CreateAttributeInput = z.infer<typeof createAttributeSchema>;
