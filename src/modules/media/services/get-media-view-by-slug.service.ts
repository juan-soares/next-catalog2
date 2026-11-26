"use server";

import type { MediaView } from "@/modules/media/types";
import { mediaRepository } from "@/modules/media/repository";

export async function getMediaViewBySlug(
  slug: string,
): Promise<MediaView | null> {
  try {
    return mediaRepository.findOne({ fields: { slug } });
  } catch (error) {
    console.error("Erro ao consultar mídia:", error);

    return null;
  }
}
