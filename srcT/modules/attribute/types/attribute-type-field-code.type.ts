import { ATTRIBUTE_TYPE_REGISTRY } from "@/modules/attribute/consts";

export type AttributeTypeFieldCode =
  (typeof ATTRIBUTE_TYPE_REGISTRY)[keyof typeof ATTRIBUTE_TYPE_REGISTRY]["field"];
