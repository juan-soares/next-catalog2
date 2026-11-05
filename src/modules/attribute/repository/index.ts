import "server-only";

import { createAttribute } from "./create-attribute.repository";
import { findAttributes } from "./find-attributes.repository";

export const attributeRepository = {
  findMany: findAttributes,
  createOne: createAttribute,
};
