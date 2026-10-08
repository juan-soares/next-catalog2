import type { MediaDetails } from "@/entities/media/types";
import { findMediasDetails } from "@/entities/media/repositories";

export async function getRecentMediasDetailsByFranchiseId(
  id: string,
): Promise<MediaDetails[]> {
  return findMediasDetails({ franchiseId: id });
}
