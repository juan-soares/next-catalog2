import { AttributeRepository, AttributeTypeCode } from "../../domain";
import { attributeRepository } from "../../infrastructure/mongoose/repository";

export async function listAttributesByType(
  type: AttributeTypeCode,
) {
  return attributeRepository.findByType(type);
}
