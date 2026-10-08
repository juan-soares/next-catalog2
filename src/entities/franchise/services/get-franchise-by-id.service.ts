import { findFranchisePopulated } from "@/entities/franchise/repositories";
import type { FranchiseDetails } from "@/entities/franchise/types";

export async function getFranchiseById(
  id: string,
): Promise<FranchiseDetails | null> {
  return findFranchisePopulated({ id });
}
