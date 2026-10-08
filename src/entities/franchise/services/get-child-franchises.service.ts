import { findFranchisesPopulated } from "@/entities/franchise/repositories";
import type { FranchiseDetails } from "@/entities/franchise/types";

export async function getChildFranchises(
  id: string,
): Promise<FranchiseDetails[]> {
  return findFranchisesPopulated({ parentFranchiseId: id });
}
