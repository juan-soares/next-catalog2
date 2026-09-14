import { connectToDatabase } from "@/shared/libs/mongoose";
import type {
  FindFranchiseFilters,
  FranchiseDetails,
} from "@/modules/franchise/types";
import { FranchiseModel } from "@/modules/franchise/models";
import { mapFranchiseDocPopulatedToDoFranchiseDetails } from "@/modules/franchise/mappers";

export async function findFranchisesPopulated(
  filters: FindFranchiseFilters = {},
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
