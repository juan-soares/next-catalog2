import { connectToDatabase } from "@/shared/libs/mongoose";
import type {
  FranchiseDetails,
  FindFranchiseMongoFilters,
} from "@/modules/franchise/types";
import { FranchiseModel } from "@/modules/franchise/models";
import { mapFranchiseDocPopulatedToDoFranchiseDetails } from "@/modules/franchise/mappers";

export async function findFranchisesPopulated(
  filters: FindFranchiseMongoFilters = {},
): Promise<FranchiseDetails[]> {
  await connectToDatabase();

  const franchiseDocs = await FranchiseModel.find(filters)
    .sort({ title: 1 })
    .populate("logoId")
    .collation({
      locale: "pt",
      strength: 1,
    })
    .lean();

  return franchiseDocs.map(mapFranchiseDocPopulatedToDoFranchiseDetails);
}
