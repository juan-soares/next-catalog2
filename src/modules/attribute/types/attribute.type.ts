import type { AttributeTypeCode } from "@/modules/attribute/types";

export type Attribute = {
  id: string;
  label: string;
  slug: string;
  type: AttributeTypeCode;
  createdAt: Date;
  updatedAt: Date;
};
