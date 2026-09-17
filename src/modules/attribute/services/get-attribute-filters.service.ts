import { ATTRIBUTE_TYPES_LIST } from "@/modules/attribute/consts";
import { getAttributesByType } from "@/modules/attribute/services";
import type { AttributeFilters } from "@/modules/attribute/types";

export async function getAttributeFilters(): Promise<AttributeFilters[]> {
  const attributeTypes = ATTRIBUTE_TYPES_LIST.filter(
    ({ code }) => code !== "characterStatus" && code !== "universeType",
  );

  return Promise.all(
    attributeTypes.map(async (attributeType) => {
      const options = await getAttributesByType(attributeType.code);

      return {
        ...attributeType,
        options,
      };
    }),
  );
}
