import { AttributeRepository } from "@/modules/attribute/domain";

import { findAttributeById } from "./find-attribute-by-id.repository";
import { findAttributesByType } from "./find-attributes-by-type.repository";
import { deleteAttributeBySlugAndType } from "./delete-attribute-by-slug-and-type.repository";
import { createAttribute } from "./create-attribute.repository";

export const attributeRepository: AttributeRepository = {
  findById: findAttributeById,
  findByType: findAttributesByType,
  createOne: createAttribute,
  deleteOne: deleteAttributeBySlugAndType,
};
