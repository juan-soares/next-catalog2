import type { AttributeDocument, Attribute } from "@/modules/attribute/types";

export function mapAttributeDocToAttribute(
  attributeDoc: AttributeDocument,
): Attribute {
  return {
    id: attributeDoc._id.toString(),
    label: attributeDoc.label,
    slug: attributeDoc.slug,
    type: attributeDoc.type,
    createdAt: attributeDoc.createdAt,
    updatedAt: attributeDoc.updatedAt,
  };
}
