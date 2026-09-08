import { attributeRepository } from "@/modules/attribute/infrastructure";
import type { Attribute, AttributeTypeCode } from "@/modules/attribute/types";

export async function listAttributesByType(
  type: AttributeTypeCode,
): Promise<Attribute[]> {
  return attributeRepository.findByType(type);
}
