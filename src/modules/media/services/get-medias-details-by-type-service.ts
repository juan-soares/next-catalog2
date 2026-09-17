import { MediaTypeCode } from "@/modules/media-type";
import type { MediaDetails } from "@/modules/media/types";
import { findMediasDetails } from "@/modules/media/repositories";

export async function getMediasDetailsByType(
  type: MediaTypeCode,
): Promise<MediaDetails[]> {
  return findMediasDetails({ type });
}
