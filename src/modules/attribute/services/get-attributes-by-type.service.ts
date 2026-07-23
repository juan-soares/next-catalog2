import { attributeRepository } from "../repository";
import { Attribute, AttributeTypeKeys } from "../types";

export async function getAttributesByType(
  type: AttributeTypeKeys,
): Promise<Attribute[]> {
  return attributeRepository.find(type);
}
