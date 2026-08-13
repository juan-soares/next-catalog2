import { MediaItem } from "@/modules/media-item";
import { CarouselItem } from "../types";

export function mapMediaItemToCarouselItem(mediaItem: MediaItem): CarouselItem {
  return {
    title: mediaItem.title,
    cover: mediaItem.cover,
  };
}
