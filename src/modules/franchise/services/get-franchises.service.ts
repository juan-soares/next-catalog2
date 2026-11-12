"use server";

import type { FranchiseView } from "@/modules/franchise/types";
import { franchiseRepository } from "../repository";

export async function getFranchises(): Promise<FranchiseView[]> {
  return franchiseRepository.findMany();
}
