import { deleteAttributeItemById } from "./delete-attribute-item.repository";
import { findAttributeItems } from "./find-attribute.items.repository";

export const attributeItemRepository = {
  findMany: findAttributeItems,
  deleteOne: deleteAttributeItemById,
};
