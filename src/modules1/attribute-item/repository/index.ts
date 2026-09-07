import { deleteAttributeItemById } from "./delete-attribute-item.repository";
import { findAttributeItemById } from "./find-attribute-item-by-id.repository";
import { findAttributeItems } from "./find-attribute.items.repository";
import { updateAttributeItemById } from "./update-attribute-item-by-id.repository";

export const attributeItemRepository = {
  findById: findAttributeItemById,
  findMany: findAttributeItems,
  updateOne: updateAttributeItemById,
  deleteOne: deleteAttributeItemById,
};
