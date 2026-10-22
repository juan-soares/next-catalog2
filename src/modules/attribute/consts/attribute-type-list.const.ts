import type { AttributeType } from "@/modules/attribute/types";
import { ATTRIBUTE_TYPE_REGISTRY } from "@/modules/attribute/consts";

export const ATTRIBUTE_TYPE_LIST: AttributeType[] = Object.values(
  ATTRIBUTE_TYPE_REGISTRY,
);
