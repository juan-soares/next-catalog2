import { MediaItem } from "@/modules/media-item";
import { CatalogListItem } from "../types";
import { MEDIA_ITEM_COVER_PATH, MEDIA_TYPE_CATALOG_PATH } from "@/consts/paths";

export function mapMediaItemToCatalogListItem(
  mediaItem: MediaItem,
): CatalogListItem {
  return {
    id: mediaItem.id,
    href: `${MEDIA_TYPE_CATALOG_PATH + mediaItem.mediaType.slug}/${mediaItem.slug}`,
    cover: `${MEDIA_ITEM_COVER_PATH + mediaItem.mediaType.slug}/${mediaItem.cover}`,
    title: mediaItem.title,
    mediaType: mediaItem.mediaType.label,
    releaseYear: mediaItem.releaseDate.getFullYear().toString(),
  };
}
