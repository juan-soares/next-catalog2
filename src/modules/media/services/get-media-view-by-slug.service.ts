import type { MediaView } from "@/modules/media/types";
import { mediaRepository } from "@/modules/media/repository";

export async function getMediaViewBySlug(
  slug: string,
): Promise<MediaView | null> {
  return mediaRepository.findOne({ fields: { "identifiers.slug": slug } });
}
