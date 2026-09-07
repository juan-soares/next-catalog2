import type { AttributeTypeCode } from "./attribute-type.type";

export type Attribute = {
  id: string;
  label: string;
  slug: string;
  type: AttributeTypeCode;
  createdAt: Date;
  updatedAt: Date;
};
