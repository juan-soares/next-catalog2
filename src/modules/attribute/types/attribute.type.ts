import { AttributeTypeKey } from "./attribute-type-keys.type";

export type Attribute = {
  value: string;
  label: string;
  type: AttributeTypeKey;
};
