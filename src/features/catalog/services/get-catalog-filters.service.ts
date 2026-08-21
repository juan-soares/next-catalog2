import { CatalogFilter } from "../types";
import { MediaTypeKey } from "@/modules/media-type";
import { getAttributeTypeKeysByMediaType } from "@/modules/attribute-type";
import { getAttributeItemsByType } from "@/modules/attribute-item/services";
import { ATTRIBUTE_TYPES } from "@/modules/attribute-type";
import { mapAttributeItemToCatalogOption } from "../mappers/map-attribute-item-to-catalog-option.mapper";
import {
  ATTRIBUTES_CATALOG_NEW_PATH,
  ATTRIBUTES_CATALOG_PATH,
} from "@/consts/paths";

export async function getCatalogFilters(
  mediaType: MediaTypeKey,
): Promise<CatalogFilter[]> {
  const attributeTypeKeys = getAttributeTypeKeysByMediaType(mediaType);

  const attributeTypeWithValues = await Promise.all(
    attributeTypeKeys.map(async (attributeType) => ({
      attributeType,
      values: await getAttributeItemsByType(attributeType),
    })),
  );

  return attributeTypeWithValues.map(({ attributeType, values }) => {
    const { label, fieldName } = ATTRIBUTE_TYPES[attributeType];
    const options = values.map(mapAttributeItemToCatalogOption);

    return {
      label,
      fieldName,
      options,
    };
  });
}
