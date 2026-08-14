import { AttributeType, Attribute } from ".";

export type AttributeFieldView = AttributeType & {
  options: Attribute[];
};
