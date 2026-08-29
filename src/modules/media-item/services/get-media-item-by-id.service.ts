import { mediaItemRepository } from "../repository";
import { MediaItem } from "../types";

export async function getMediaItemById(id: string): Promise<MediaItem | null> {
  return mediaItemRepository.findById(id);
}
