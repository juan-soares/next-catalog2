import "server-only";

import { findFranchisesPopulated } from "@/modules/franchise/repositories";
import type { FranchiseDetails } from "@/modules/franchise/types";

export async function getParentFranchises(): Promise<FranchiseDetails[]> {
  return findFranchisesPopulated({
    parentFranchiseId: null,
  });
}
