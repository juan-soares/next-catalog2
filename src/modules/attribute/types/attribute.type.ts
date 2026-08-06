import { AttributeTypeKey } from "./attribute-type-key.type";

export type Attribute = {
  id: string;
  value: string;
  label: string;
  type: AttributeTypeKey;
};
