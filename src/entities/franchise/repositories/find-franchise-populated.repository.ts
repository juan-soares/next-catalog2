import "server-only";

import { connectToDatabase } from "@/shared/libs/mongoose";
import type {
  FindFranchiseFilters,
  FranchiseDetails,
} from "@/entities/franchise/types";
import { FranchiseModel } from "@/entities/franchise/models";
import {
  mapFindFranchiseFiltersToFindFranchiseMongoFilters,
  mapFranchiseDocPopulatedToDoFranchiseDetails,
} from "@/entities/franchise/mappers";

export async function findFranchisePopulated(
  filters: FindFranchiseFilters = {},
): Promise<FranchiseDetails | null> {
  const mongoFilters =
    mapFindFranchiseFiltersToFindFranchiseMongoFilters(filters);

  await connectToDatabase();

  const franchiseDoc = await FranchiseModel.findOne(mongoFilters)
    .populate("logoId")
    .lean();

  if (!franchiseDoc) return null;

  return mapFranchiseDocPopulatedToDoFranchiseDetails(franchiseDoc);
}
