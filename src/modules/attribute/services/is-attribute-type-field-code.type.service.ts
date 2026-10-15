import { AttributeTypeFieldCode } from "@/modules/attribute/types";
import { ATTRIBUTE_TYPE_FIELD_CODE_LIST } from "@/modules/attribute/consts";

export function isAttributeTypeFieldCode(
  value: string,
): value is AttributeTypeFieldCode {
  return ATTRIBUTE_TYPE_FIELD_CODE_LIST.some((field) => field === value);
}
