import { ATTRIBUTE_TYPES } from "../definitions";
import { AttributeType } from "../types";

type Options = {
  orderBy: "label";
  order: "asc" | "desc";
};

export function getAttributeTypes(options?: Options): AttributeType[] {
  const attributes = Object.values(ATTRIBUTE_TYPES);

  if (!options) return attributes;

  return attributes.sort((a, b) => a.label.localeCompare(b.label));
}
