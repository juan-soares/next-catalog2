import "server-only";

import { connectToDatabase } from "@/shared/libs/mongoose";
import { FranchiseModel } from "@/entities/franchise/models";
import { mapFranchiseDocToFranchise } from "@/entities/franchise/mappers";
import type {
  CreateFranchiseData,
  Franchise,
} from "@/entities/franchise/types";

export async function createOneFranchise(
  data: CreateFranchiseData,
): Promise<Franchise> {
  await connectToDatabase();

  try {
    const franchiseDoc = await FranchiseModel.create(data);
    return mapFranchiseDocToFranchise(franchiseDoc);
  } catch (error) {
    console.log(error);
    throw new Error("quebrou");
  }
}
