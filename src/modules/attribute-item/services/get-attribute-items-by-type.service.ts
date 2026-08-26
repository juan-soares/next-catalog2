import { AttributeTypeKey } from "@/modules/attribute-type";
import { AttributeItem, AttributeItemSortOption } from "../types";
import { attributeItemRepository } from "../repository";

export async function getAttributeItemsByType(
  sort: AttributeItemSortOption = "label-asc",
  attributeType: AttributeTypeKey,
): Promise<AttributeItem[]> {
  return attributeItemRepository.findMany({ sort, attributeType });
}
