import "server-only";

import { findFranchisesPopulated } from "@/entities/franchise/repositories";
import type { FranchiseDetails } from "@/entities/franchise/types";

export async function getParentFranchises(): Promise<FranchiseDetails[]> {
  return findFranchisesPopulated({
    parentFranchiseId: null,
  });
}
