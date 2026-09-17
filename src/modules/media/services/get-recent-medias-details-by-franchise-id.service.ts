import type { MediaDetails } from "@/modules/media/types";
import { findMediasDetails } from "@/modules/media/repositories";

export async function getRecentMediasDetailsByFranchiseId(
  id: string,
): Promise<MediaDetails[]> {
  return findMediasDetails({ franchiseId: id });
}
