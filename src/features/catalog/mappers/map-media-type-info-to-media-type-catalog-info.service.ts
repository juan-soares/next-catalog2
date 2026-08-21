import { MediaTypeInfo } from "@/modules/media-type";
import { MediaTypeCatalogInfo } from "../types";
import { searchMediaItems } from "@/modules/media-item";
import { mapMediaItemToCatalogListItem } from "./map-media-item-to-catalog-list-item.mapper";
import { getCatalogFilters } from "../services/get-catalog-filters.service";

export async function mapMediaTypeInfoToMediaTypeCatalogInfo(
  mediaTypeInfo: MediaTypeInfo,
): Promise<MediaTypeCatalogInfo> {
  const mediaItems = await searchMediaItems({ type: mediaTypeInfo.key });
  const results = mediaItems.map(mapMediaItemToCatalogListItem);
  const filters = await getCatalogFilters(mediaTypeInfo.key);

  return {
    title: mediaTypeInfo.label,
    filters,
    results,
  };
}
