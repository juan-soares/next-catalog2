import { AttributeTypeCode } from "./attribute-type.type";

export type Attribute = {
  id: string;
  label: string;
  slug: string;
  attributeType: AttributeTypeCode;
  createdAt: Date;
  updatedAt: Date;
};
