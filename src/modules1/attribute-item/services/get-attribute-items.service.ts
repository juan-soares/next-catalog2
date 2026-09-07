import { AttributeItem, AttributeItemSortOption } from "../types";
import { attributeItemRepository } from "../repository";

export async function getAttributeItems(
  sort: AttributeItemSortOption,
): Promise<AttributeItem[]> {
  return attributeItemRepository.findMany({ sort });
}
