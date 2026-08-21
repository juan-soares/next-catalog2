import { AttributeTypeKey } from "@/modules/attribute-type";
import { mediaItemRepository } from "@/modules/media-item/repository";

export async function createAttributeItem(
  label: string,
  type: AttributeTypeKey,
): Promise<boolean> {
    const newAttributeItem = {label,type}
  await mediaItemRepository.createOne({label, type});
  return true;
}
