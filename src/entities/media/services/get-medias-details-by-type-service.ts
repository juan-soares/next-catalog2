import { MediaTypeCode } from "@/modules/media-type";
import type { MediaDetails } from "@/entities/media/types";
import { findMediasDetails } from "@/entities/media/repositories";

export async function getMediasDetailsByType(
  type: MediaTypeCode,
): Promise<MediaDetails[]> {
  return findMediasDetails({ type });
}
