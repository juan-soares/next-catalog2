import { MediaItem } from "../types";
import { mediaItemRepository } from "../repository";

export async function searchMediaItems(type: string): Promise<MediaItem[]> {
  return mediaItemRepository.findMany();
}
