import { AttributeTypesKey } from "./attribute-types-key.type";

export type AttributeItem = {
  id: string;
  label: string;
  attributeType: AttributeTypesKey;
};
