import { MediaItem } from "../types";
import { mediaItemRepository } from "../repository";

type SearchOptions = {
  query: string;
  limit?: number;
  orderBy: "title" | "createdAt" | "updatedAt";
  order: "asc" | "desc";
};

export async function searchMediaItemsByTitleOrTranslatedTitle(
  searchOptions: SearchOptions,
): Promise<MediaItem[]> {
  return mediaItemRepository.findByTitleOrTranslatedTitle(searchOptions);
}
