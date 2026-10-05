import { findFranchisesPopulated } from "@/modules/franchise/repositories";
import type { FranchiseDetails } from "@/modules/franchise/types";

export async function getChildFranchises(
  id: string,
): Promise<FranchiseDetails[]> {
  return findFranchisesPopulated({ parentFranchiseId: id });
}
