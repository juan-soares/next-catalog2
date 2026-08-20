import { CatalogFilter } from "../types";
import { MediaTypeKey } from "@/modules/media-type";
import { getAttributeTypeKeysByMediaType } from "@/modules/attribute-type";
import { getAttributeItemsByType } from "@/modules/attribute-item/services";

export async function getCatalogFilters(
  mediaType: MediaTypeKey,
): Promise<CatalogFilter[]> {
  const attributeTypeKeys = getAttributeTypeKeysByMediaType(mediaType);

  const attribueValues = await Promise.all(
    attributeTypeKeys.map((attribute) => {
      getAttributeItemsByType(attribute);
    }),
  );
}
