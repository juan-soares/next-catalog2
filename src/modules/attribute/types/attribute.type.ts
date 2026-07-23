import { AttributeTypeKeys } from "./attribute-type-keys.type";

export type Attribute = {
  id: string;
  label: string;
  type: AttributeTypeKeys;
};
