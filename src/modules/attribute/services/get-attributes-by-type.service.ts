import { Attribute, AttributeTypeCode } from "@/modules/attribute/types";
import { ATTRIBUTES_MOCK } from "../consts/attribute.mock.const";

export async function getAttributesByType(
  type: AttributeTypeCode,
): Promise<Attribute[]> {
  return ATTRIBUTES_MOCK.filter((att) => att.type.code === type);
}
