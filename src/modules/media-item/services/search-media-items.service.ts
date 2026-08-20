import { MediaItem } from "../types";
import { mediaItemRepository } from "../repository";
import { MediaTypeKey } from "@/modules/media-type";

type SearchParams = {
  type?: MediaTypeKey;
};

export async function searchMediaItems(
  searchParams: SearchParams,
): Promise<MediaItem[]> {
  return mediaItemRepository.findMany(searchParams);
}
