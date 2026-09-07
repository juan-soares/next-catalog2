import { attributeRepository } from "@/modules/attribute/infrastructure";
import { DeleteAttributeIdentifiers } from "./delete-attribute.types";

export async function deleteAttribute(
  identifiers: DeleteAttributeIdentifiers,
): Promise<boolean> {
  return attributeRepository.deleteOne(identifiers);
}
