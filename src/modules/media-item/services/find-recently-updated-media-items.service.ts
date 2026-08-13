import { mediaItemRepository } from "../repository";
import { MediaItem } from "../types";

export async function findRecentlyUpdatedMediaItems(
  limit = 5,
): Promise<MediaItem[]> {
  return mediaItemRepository.findRecent(limit);
}
