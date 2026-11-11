"use server";

import { connectToMongoDB } from "@/shared/libs/mongoose";
import type { FranchiseData, FranchiseView } from "@/modules/franchise/types";
import { FranchiseModel } from "@/modules/franchise/models";
import { franchiseRepository } from "@/modules/franchise/repository";
import { mapFranchiseDocToFranchiseView } from "@/modules/franchise/mappers";

export async function createFranchise(
  data: FranchiseData,
): Promise<FranchiseView> {
  await connectToMongoDB();

  const doc = await FranchiseModel.create(data);

  return mapFranchiseDocToFranchiseView(doc);
}
