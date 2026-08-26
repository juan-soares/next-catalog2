import { AttributeItem } from "../types";
import { attributeItemRepository } from "../repository";

type SortOrder = {
  sortOrder: "label-asc" | "label-desc";
};

export async function getAttributeItems({
  sortOrder = "label-asc",
}: SortOrder): Promise<AttributeItem[]> {
  return attributeItemRepository.findMany({ sortOrder });
}
