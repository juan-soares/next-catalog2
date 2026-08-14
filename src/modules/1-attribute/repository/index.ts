import { findAttributeByTypeAndValue } from "./find-attribute-by-type-and-value.repository";
import { findAttributesByType } from "./find-attributes-by-type.repository";
import { insertAttribute } from "./insert-attribute.repository";

export const attributeRepository = {
  find: findAttributesByType,
  findByTypeAndValue: findAttributeByTypeAndValue,
  insert: insertAttribute,
};
