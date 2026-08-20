import { AttributeTypeKey } from "@/modules/attribute-type";

export type AttributeItem = {
  id: string;
  label: string;
  slug: string;
  attributeType: AttributeTypeKey;
};
