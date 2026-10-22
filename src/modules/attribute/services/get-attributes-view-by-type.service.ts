import { ATTRIBUTES_MOCK } from "@/app/mocks";
import type {
  AttributeTypeCode,
  AttributeView,
} from "@/modules/attribute/types";
import { ATTRIBUTE_TYPE_REGISTRY } from "@/modules/attribute/consts";

export async function getAttributesByType(
  typeCode: AttributeTypeCode,
): Promise<AttributeView[]> {
  return ATTRIBUTES_MOCK.filter((att) => att.typeCode === typeCode).map(
    ({ id, label, typeCode }) => ({
      id,
      label,
      type: { label: ATTRIBUTE_TYPE_REGISTRY[typeCode].label },
    }),
  );
}
