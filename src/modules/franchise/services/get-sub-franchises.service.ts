import { findFranchisesPopulated } from "@/modules/franchise/repositories";
import type { FranchiseDetails } from "@/modules/franchise/types";

export async function getSubFranchises(): Promise<FranchiseDetails[]> {
  return findFranchisesPopulated({
    parentFranchiseId: { $ne: null },
  });
}
