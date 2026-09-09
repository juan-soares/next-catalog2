import z from "zod";
import type { AttributeTypeCode } from "@/modules/attribute/types";
import { createAttributeSchema } from "@/modules/attribute/schemas";

export type CreateAttributeInput = z.infer<typeof createAttributeSchema>;

export type CreateAttributeData = {
  label: string;
  slug: string;
  type: AttributeTypeCode;
};
