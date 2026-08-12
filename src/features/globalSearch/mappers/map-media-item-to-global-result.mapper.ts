import { MediaItem } from "@/modules/media-item";
import { GlobalResult } from "../types";
import { MEDIA_ITEM_COVER_PATH } from "@/consts/paths";

export function mapMediaItemToGlobalResult(mediaItem: MediaItem): GlobalResult {
  return {
    id: mediaItem.id,
    href: `/${mediaItem.mediaType.slug}/${mediaItem.slug}`,
    title: mediaItem.title,
    coverPath: MEDIA_ITEM_COVER_PATH + mediaItem.cover,
    releaseYear: mediaItem.releaseDate.getFullYear().toString(),
    mediaType: mediaItem.mediaType.label,
  };
}
