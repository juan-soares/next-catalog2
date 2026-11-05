import type { AttributeDoc, AttributeView } from "@/modules/attribute/types";
import { ATTRIBUTE_TYPE_REGISTRY } from "@/modules/attribute/consts";

export function mapAttributeDocToAttributeView(
  doc: AttributeDoc,
): AttributeView {
  return {
    id: doc._id.toString(),
    label: doc.label,
    type: ATTRIBUTE_TYPE_REGISTRY[doc.typeCode],
  };
}
