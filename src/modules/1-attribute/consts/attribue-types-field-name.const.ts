import { ATTRIBUTE_TYPES } from "../definitions";
import { AttributeTypeKey } from "../types";

export type AttributeFieldName =
  (typeof ATTRIBUTE_TYPES)[AttributeTypeKey]["fieldName"];
