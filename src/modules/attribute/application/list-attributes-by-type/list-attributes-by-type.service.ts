import { Attribute, AttributeTypeCode } from "@/modules/attribute/domain";
import { attributeRepository } from "@/modules/attribute/infrastructure";

export async function listAttributesByType(
  type: AttributeTypeCode,
): Promise<Attribute[]> {
  return attributeRepository.findByType(type);
}
