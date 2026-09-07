import { AttributeRepository } from "@/modules/attribute/domain";

import { findAttributeById } from "./find-attribute-by-id.repository";
import { findAttributesByType } from "./find-attributes-by-type.repository";
import { deleteAttributeById } from "./delete-attribute-by-id.repository";

export const attributeRepository: AttributeRepository = {
  findById: findAttributeById,
  findByType: findAttributesByType,
  deleteOne: deleteAttributeById,
};
