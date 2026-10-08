import { findFranchisePopulated } from "@/modules/franchise/repositories";
import type { FranchiseDetails } from "@/modules/franchise/types";

export async function getFranchiseById(
  id: string,
): Promise<FranchiseDetails | null> {
  return findFranchisePopulated({ id });
}
