"use server";

import type { MediaCategoryCode } from "@/modules/media-category/types";
import { mediaRepository } from "@/modules/media/repository";

export async function deleteMedia(
  id: string,
): Promise<MediaCategoryCode | null> {
  try {
    const deletedMedia = await mediaRepository.deleteOne(id);

    return deletedMedia.categoryCode;
  } catch (error) {
    console.error("Erro ao remover a mídia:", error);
    return null;
  }
}
