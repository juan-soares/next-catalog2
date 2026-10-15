import { ATTRIBUTE_TYPE_REGISTRY } from "@/modules/attribute/consts";

export const ATTRIBUTE_TYPE_FIELD_CODE_LIST = Object.values(
  ATTRIBUTE_TYPE_REGISTRY,
).map(({ field }) => field);
