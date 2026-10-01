import { findAtrributesByIdAndType } from "@/modules/attribute/repositories";
import type { AttributeTypeCode } from "@/modules/attribute/types";

export async function filterValidAttributeIds(
  ids: string[],
  type: AttributeTypeCode,
): Promise<string[]> {
  const attributes = await findAtrributesByIdAndType(ids, type);

  return attributes.map((attribute) => attribute._id.toString());
}
