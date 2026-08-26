import { AttributeTypeKey } from "@/modules/attribute-type";
import { AttributeItem } from "../types";
import { attributeItemRepository } from "../repository";

export async function getAttributeItemsByType(
  sortOrder: "label-asc" | "label-desc",
  attributeType: AttributeTypeKey,
): Promise<AttributeItem[]> {
  return attributeItemRepository.findMany({ sortOrder, attributeType });
}
