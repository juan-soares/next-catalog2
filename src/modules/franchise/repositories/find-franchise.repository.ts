import {
  mapFindFranchiseFiltersToFindFranchiseMongoFilters,
  mapFranchiseDocToFranchise,
} from "@/modules/franchise/mappers";
import { FranchiseModel } from "@/modules/franchise/models";
import type {
  FindFranchiseFilters,
  Franchise,
} from "@/modules/franchise/types";

export async function findFranchise(
  filters: FindFranchiseFilters = {},
): Promise<Franchise | null> {
  const mongoFilters =
    mapFindFranchiseFiltersToFindFranchiseMongoFilters(filters);

  const franchise = await FranchiseModel.findOne(mongoFilters).lean();

  if (!franchise) return null;

  return mapFranchiseDocToFranchise(franchise);
}
