import { ATTRIBUTE_TYPES_LIST } from "@/modules/attribute/consts";
import { getAttributesByType } from "@/modules/attribute/services";
import type { AttributeFilters } from "@/modules/attribute/types";

export async function getAttributeFilters(): Promise<AttributeFilters[]> {
  return Promise.all(
    ATTRIBUTE_TYPES_LIST.map(async (attributeType) => {
      const options = await getAttributesByType(attributeType.code);

      return {
        ...attributeType,
        options,
      };
    }),
  );
}
