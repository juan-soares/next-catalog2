import { MediaItem } from "@/modules/media-item/types";
import { Anime } from "../types";

export function mapMediaItemToAnime(mediaItem: MediaItem): Anime {
  return {
    title: mediaItem.title,
    slug: mediaItem.slug,
    cover: mediaItem.cover,
    mediaType: mediaItem.mediaType,
    releaseDate: mediaItem.releaseDate,
  };
}
