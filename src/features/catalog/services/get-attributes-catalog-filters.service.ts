import { ATTRIBUTES_CATALOG_NEW_PATH } from "@/consts/paths";

import { CatalogFilter } from "../types";
import { mapAttributeItemToCatalogOption } from "../mappers";

import {
  ATTRIBUTE_TYPES,
  getAttributeTypeKeysByMediaType,
} from "@/modules/attribute-type";
import { MediaTypeKey } from "@/modules/media-type";
import { getAttributeItemsByType } from "@/modules/attribute-item";

export async function getAttributesCatalogFilters(
  mediaType: MediaTypeKey,
): Promise<CatalogFilter[]> {
  const attributeTypeKeys = getAttributeTypeKeysByMediaType(mediaType);

  const attributeTypeWithValues = await Promise.all(
    attributeTypeKeys.map(async (attributeType) => ({
      attributeType,
      values: await getAttributeItemsByType("label-asc", attributeType),
    })),
  );

  return attributeTypeWithValues.map(({ attributeType, values }) => {
    const { label, fieldName } = ATTRIBUTE_TYPES[attributeType];
    const options = values.map(mapAttributeItemToCatalogOption);

    return {
      label,
      fieldName,
      path: ATTRIBUTES_CATALOG_NEW_PATH,
      options,
    };
  });
}
