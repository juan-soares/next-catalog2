import { mediaItemRepository } from "../repository";
import { MediaItem } from "../types";

export async function ensureMediaItemDoesNotExist(
  mediaItem: Pick<MediaItem, "slug" | "mediaType">,
): Promise<void> {
  const existingAttribute = await mediaItemRepository.findByMediaTypeAndSlug(
    mediaItem.mediaType,
    mediaItem.slug,
  );

  if (existingAttribute) {
    throw new Error(
      `Já existe um atributo com este valor em ${mediaItem.mediaType}.`,
    );
  }
}
