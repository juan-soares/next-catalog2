import { connectToDatabase } from "@/shared/libs/mongoose";
import { FranchiseModel } from "@/modules/franchise/models";
import { mapFranchiseDocToFranchise } from "@/modules/franchise/mappers";
import type { CreateFranchiseData, Franchise } from "@/modules/franchise/types";

export async function createOneFranchise(
  data: CreateFranchiseData,
): Promise<Franchise> {
  await connectToDatabase();

  const franchiseDoc = await FranchiseModel.create(data);

  return mapFranchiseDocToFranchise(franchiseDoc);
}
