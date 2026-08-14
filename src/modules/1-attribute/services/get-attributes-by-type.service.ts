import { attributeRepository } from "../repository";
import { Attribute, AttributeTypeKey } from "../types";

export async function getAttributesByType(
  type: AttributeTypeKey,
): Promise<Attribute[]> {
  return attributeRepository.find(type);
}
