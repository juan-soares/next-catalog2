import { ATTRIBUTE_TYPES_LIST } from "@/modules/attribute/consts";
import { AttributeType } from "@/modules/attribute/types";

export function getAttributeTypeBySlug(slug: string): AttributeType | null {
  const attributeType = ATTRIBUTE_TYPES_LIST.find((type) => type.slug === slug);

  if (!attributeType) return null;

  return attributeType;
}
