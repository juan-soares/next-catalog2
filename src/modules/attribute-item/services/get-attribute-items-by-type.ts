import { AttributeTypeKey } from "@/modules/attribute-type";
import { AttributeItem } from "../types";
import { attributeItemRepository } from "../repository";

export async function getAttributeItemsByType(
  attributeType: AttributeTypeKey,
): Promise<AttributeItem[]> {
  return attributeItemRepository.findMany({
    attributeType,
  });
}
