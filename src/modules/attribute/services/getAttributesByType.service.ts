import { attributeRepository } from "../repository";
import { AttributeItem } from "../types";

export async function getAttributesByAttributeType(
  type: string,
): Promise<AttributeItem[]> {
  return await attributeRepository.find(type);
}
