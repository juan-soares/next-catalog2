import { ATTRIBUTES_CATALOG_NEW_PATH } from "@/shared/consts/paths.const";

import { CatalogFilter } from "../types";
import { mapAttributeItemToCatalogOption } from "../mappers";

import {
  ATTRIBUTE_TYPES,
  getAttributeTypeKeysByMediaType,
} from "@/modules1/attribute-type";
import { MediaTypeKey } from "@/modules1/media-type";

export async function getAttributesCatalogFilters(
  mediaType: MediaTypeKey,
): Promise<CatalogFilter[]> {
  const attributeTypeKeys = getAttributeTypeKeysByMediaType(mediaType);

  const attributeTypeWithValues = await Promise.all(
    attributeTypeKeys.map(async (attributeType) => ({
      attributeType,
      values: [],
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
