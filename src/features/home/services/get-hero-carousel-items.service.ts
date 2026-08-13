import { findRecentlyUpdatedMediaItems } from "@/modules/media-item";
import { CarouselItems } from "../types";
import { mapMediaItemToCarouselItem } from "../mappers";

export async function getHeroCarouselItems(): Promise<CarouselItems> {
  const mediaItems = await findRecentlyUpdatedMediaItems(5);

  return mediaItems.map(mapMediaItemToCarouselItem);
}
