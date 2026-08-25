import { AttributeTypeKey } from "@/modules/attribute-type";
import { mediaItemRepository } from "@/modules/media-item/repository";

type NewAttributeProps = {
  label: string;
  attributeType: AttributeTypeKey;
};

export async function createAttributeItem(
  newAttribute: NewAttributeProps,
): Promise<boolean> {
  await mediaItemRepository.createOne(newAttribute);
  return true;
}
