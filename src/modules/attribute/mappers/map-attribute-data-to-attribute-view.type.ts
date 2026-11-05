import type { AttributeData, AttributeView } from "@/modules/attribute/types";
import { ATTRIBUTE_TYPE_REGISTRY } from "@/modules/attribute/consts";

export function mapAttributeDataToAttributeView(
  id: string,
  data: AttributeData,
): AttributeView {
  return {
    id,
    label: data.label,
    type: ATTRIBUTE_TYPE_REGISTRY[data.typeCode],
  };
}
