import { AttributeItem, AttributeItemDocument } from "../types";

export function mapAttributeDocToAttributeItem(
  attributeDoc: AttributeItemDocument,
): AttributeItem {
  return {
    id: attributeDoc._id.toString(),
    slug: attributeDoc.slug,
    label: attributeDoc.label,
    attributeType: attributeDoc.attributeType,
  };
}
