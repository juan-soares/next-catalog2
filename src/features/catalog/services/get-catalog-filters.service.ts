import { CatalogFilter } from "../types";
import { getFranchiseCatalogFilters } from "./get-franchise-catalog-filters.service";
import { getAttributesCatalogFilters } from "./get-attributes-catalog-filters.service";

import { MediaTypeKey } from "@/modules/media-type";

export async function getCatalogFilters(
  mediaType: MediaTypeKey,
): Promise<CatalogFilter[]> {
  const attributeFilters = await getAttributesCatalogFilters(mediaType);
  const franchiseFilters = await getFranchiseCatalogFilters();

  return [...attributeFilters, { ...franchiseFilters }];
}
