import { connectToMongoDB } from "@/shared/libs/mongoose";
import type { FranchiseView } from "@/modules/franchise/types";
import { FranchiseModel } from "@/modules/franchise/models";
import { mapFranchiseDocToFranchiseView } from "@/modules/franchise/mappers";

export async function findFranchises(): Promise<FranchiseView[]> {
  await connectToMongoDB();

  const franchisesDoc = await FranchiseModel.find().lean();

  return franchisesDoc.map(mapFranchiseDocToFranchiseView);
}
