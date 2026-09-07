import { AttributeRepository } from "@/modules/attribute/domain";

import { findAttributeById } from "./find-attribute-by-id.repository";
import { findAttributesByType } from "./find-attributes-by-type.repository";
import { deleteAttributeBySlugAndType } from "./delete-attribute-by-slug-and-type.repository";
import { createAttribute } from "./create-attribute.repository";
import { updateAttribute } from "./update-attribute.repository";
import { findAttributeBySlug } from "./find-attribute-by-slug.repository";

export const attributeRepository: AttributeRepository = {
  findById: findAttributeById,
  findByType: findAttributesByType,
  findOne: findAttributeBySlug,
  createOne: createAttribute,
  updateOne: updateAttribute,
  deleteOne: deleteAttributeBySlugAndType,
};
