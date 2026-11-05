import { ATTRIBUTE_TYPE_LIST } from "@/modules/attribute/consts";
import type { AttributeTypeView } from "@/modules/attribute/types";

export function getAttributeTypeByCode(code: string): AttributeTypeView | null {
  return ATTRIBUTE_TYPE_LIST.find((type) => type.code === code) ?? null;
}
