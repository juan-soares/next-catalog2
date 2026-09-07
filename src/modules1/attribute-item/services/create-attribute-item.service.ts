import { AttributeTypeKey } from "@/modules1/attribute-type";
import { mediaItemRepository } from "@/modules1/media-item/repository";

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
