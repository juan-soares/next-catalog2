"use server";

import type { FranchiseView } from "@/modules/franchise/types";
import { franchiseRepository } from "@/modules/franchise/repository";

export async function getChildlessFranchises(): Promise<FranchiseView[]> {
  return franchiseRepository.findChildless();
}
