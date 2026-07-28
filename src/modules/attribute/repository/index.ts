import { findAttributesByType } from "./find-attributes-by-type.repository";
import { insertAttribute } from "./insert-attribute.repository";

export const attributeRepository = {
  find: findAttributesByType,
  insert: insertAttribute,
};
