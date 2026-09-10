
import { FranchiseModel } from "../models";
import { FindFranchiseFilters, Franchise } from "../types";

export async function findFranchise(
  filters: FindFranchiseFilters = {},
): Promise<Franchise | null> {
  const franchise = await FranchiseModel.findOne(filters).lean();

  if (!franchise) return null;

  return mapF(franchise);
}
