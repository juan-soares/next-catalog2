import { connectToDatabase } from "@/shared/libs/mongoose";
import type {
  FindFranchiseFilters,
  FranchiseDetails,
} from "@/modules/franchise/types";
import { FranchiseModel } from "@/modules/franchise/models";
import {
  mapFindFranchiseFiltersToFindFranchiseMongoFilters,
  mapFranchiseDocPopulatedToDoFranchiseDetails,
} from "@/modules/franchise/mappers";

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
