import { MediaTypeKey } from "@/modules/1-media-type";
import { mediaItemRepository } from "../repository";

export async function deleteMediaItem(
  mediaType: MediaTypeKey,
  slug: string,
): Promise<void> {
  const deleted = await mediaItemRepository.delete(mediaType, slug);

  if (!deleted) {
    throw new Error("Media não encontrada.");
  }
}
