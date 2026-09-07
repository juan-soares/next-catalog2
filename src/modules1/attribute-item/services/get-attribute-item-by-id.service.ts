import { attributeItemRepository } from "../repository";
import { AttributeItem } from "../types";

export async function getAttributeItemById(
  id: string,
): Promise<AttributeItem | null> {
  if (!id) return null;

  return attributeItemRepository.findById(id);
}
