import { MediaItem } from "../../media-item/types";
import { mediaItemRepository } from "../repository";

export async function searchMediaItemsByTitle(
  term: string,
  options: {
    limit: number;
    orderBy: "alph" | "createdAt" | "updatedAt";
    order: "asc" | "desc";
  },
): Promise<MediaItem[]> {
  return await mediaItemRepository.find(term);
}
