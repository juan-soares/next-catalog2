import type { Attribute, AttributeTypeCode } from "@/modules/attribute/types";
import { findAttributes } from "@/modules/attribute/repositories";

export async function getAttributesByType(
  type: AttributeTypeCode,
): Promise<Attribute[]> {
  return findAttributes({ type });
}
