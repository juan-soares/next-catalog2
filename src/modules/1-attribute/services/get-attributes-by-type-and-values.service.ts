import { attributeRepository } from "../repository";
import { Attribute, AttributeTypeKey } from "../types";

export async function getAttributesByTypeAndValues(
  type: AttributeTypeKey,
  value: string[],
): Promise<Attribute[]> {
  return await attributeRepository.find(type, value);
}
