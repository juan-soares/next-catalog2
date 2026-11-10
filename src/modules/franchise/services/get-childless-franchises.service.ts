"use server";

import type { FranchiseView } from "@/modules/franchise/types";

export async function getChildlessFranchises(): Promise<FranchiseView[]> {
  return [];
}
