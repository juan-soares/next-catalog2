import { AttributeType } from "../types";
import { getAttributeTypes } from "./get-attribute-types.service";

export function getAttributeTypeBySlug(slug: string): AttributeType | null {
  return (
    getAttributeTypes().find((attributeType) => attributeType.slug === slug) ??
    null
  );
}
