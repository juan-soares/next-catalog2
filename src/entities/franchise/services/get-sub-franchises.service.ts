import { findFranchisesPopulated } from "@/entities/franchise/repositories";
import type { FranchiseDetails } from "@/entities/franchise/types";

export async function getSubFranchises(): Promise<FranchiseDetails[]> {
  return findFranchisesPopulated({
    parentFranchiseId: { $ne: null },
  });
}
