import type { FranchiseDetails } from "@/modules/franchise/types";
import { findFranchisesPopulated } from "@/modules/franchise/repositories";

export async function getSubfranchisesDetails(
  parentFranchiseId: string,
): Promise<FranchiseDetails[]> {
  return findFranchisesPopulated({ parentFranchiseId });
}
