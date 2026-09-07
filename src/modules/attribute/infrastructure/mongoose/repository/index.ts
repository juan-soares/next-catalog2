import { AttributeRepository } from "@/modules/attribute/domain";

import { findAttributeById } from "./find-attribute-by-id.repository";
import { findAttributesByType } from "./find-attributes-by-type.repository";

export const attributeRepository: AttributeRepository = {
  findById: findAttributeById,
  findByType: findAttributesByType,
};
