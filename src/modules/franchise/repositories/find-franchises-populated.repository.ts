import { connectToDatabase } from "@/shared/libs/mongoose";
import type {
  FindFranchiseFilters,
  FranchisePopulated,
} from "@/modules/franchise/types";
import { FranchiseModel } from "@/modules/franchise/models";

export async function findFranchisesPopulated(
  filters: FindFranchiseFilters = {},
): Promise<FranchisePopulated[]> {
  await connectToDatabase();

  const franchiseDocs = await FranchiseModel.find(filters)
    .sort({ title: 1 })
    .populate("logo")
    .populate("parentFranchiseId")
    .collation({
      locale: "pt",
      strength: 1,
    })
    .lean();

  return franchiseDocs.map(mapFranchisePopulatedDocToFranchisePopulated);
}
