import type { MediaView } from "@/modules/media/types";
import { mediaRepository } from "../repository";

export async function getMediaViewBySlug(
  slug: string,
): Promise<MediaView | null> {
  return mediaRepository.findOne({ slug });
}
