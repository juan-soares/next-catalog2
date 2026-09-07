import { attributeItemRepository } from "../repository";
import { AttributeItem } from "../types";

export async function updateAttributeItem(
  updatedAttributeItem: AttributeItem,
): Promise<boolean> {
  if (!updatedAttributeItem) return false;

  return attributeItemRepository.updateOne(updatedAttributeItem);
}
