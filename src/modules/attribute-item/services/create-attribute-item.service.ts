import { AttributeTypeKey } from "@/modules/attribute-type";
import { mediaItemRepository } from "@/modules/media-item/repository";

export async function createAttributeItem(
  value: string,
  attributeType: AttributeTypeKey,
): Promise<boolean> {
  await mediaItemRepository.createOne({ label: value, attributeType });
  return true;
}
