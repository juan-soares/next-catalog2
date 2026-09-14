import type { FranchiseDetails } from "@/modules/franchise/types";
import { findFranchisesPopulated } from "@/modules/franchise/repositories";

export async function getChildlessFranchises(): Promise<FranchiseDetails[]> {
  return findFranchisesPopulated({
    parentFranchiseId: null,
  });
}
