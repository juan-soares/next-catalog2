import type { FranchiseDetails } from "@/modules/franchise/types";
import { findLastFranchisesPopulated } from "@/modules/franchise/repositories";

export async function getLastSubfranchisesDetails(): Promise<
  FranchiseDetails[]
> {
  return findLastFranchisesPopulated();
}
