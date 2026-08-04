import { AttributeTypeKey } from "./attribute-type-key.type";

export type Attribute = {
  value: string;
  label: string;
  type: AttributeTypeKey;
};
