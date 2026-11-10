"use server";

import type { FranchiseInput, FranchiseView } from "@/modules/franchise/types";

export async function createFranchise(
  franchiseInput: FranchiseInput,
): Promise<FranchiseView | null> {
  console.log(franchiseInput);
  return null;
}
