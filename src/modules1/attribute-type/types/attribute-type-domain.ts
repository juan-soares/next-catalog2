import { AttributeTypeDefinition } from "./attribute-type-definition.type";
import { AttributeTypeKey } from "./attribute-type.key.type";

export type AttributeType = AttributeTypeDefinition & {
  key: AttributeTypeKey;
};
