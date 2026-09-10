import { connectToDatabase } from "@/lib/mongoose";
import type {
  FindFranchiseFilters,
  Franchise,
} from "@/modules/franchise/types";
import { FranchiseModel } from "@/modules/franchise/models";

export async function findFranchises(
  filters: FindFranchiseFilters = {},
): Promise<Franchise[]> {
  await connectToDatabase();

  const franchiseDocs = await FranchiseModel.find(filters)
    .sort({ title: 1 })
    .collation({
      locale: "pt",
      strength: 1,
    })
    .populate("parentFranchiseId")
    .lean();

  return franchiseDocs.map(mapFranchiseDocToFranchise);
}
