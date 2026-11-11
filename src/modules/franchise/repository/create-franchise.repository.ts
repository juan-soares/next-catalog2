"use server";

import { connectToMongoDB } from "@/shared/libs/mongoose";
import type {
  FranchiseData,
  FranchiseView,
  FranchiseDoc,
} from "@/modules/franchise/types";
import { FranchiseModel } from "@/modules/franchise/models";

export async function createFranchise(
  data: FranchiseData,
): Promise<FranchiseView> {
  await connectToMongoDB();

  const doc = await FranchiseModel.create(data);

  const populatedDoc = await doc.populate<FranchiseDoc>([
    { path: "parentFranchiseId" },
  ]);

  return mapFranchiseDocToFranchiseView(populatedDoc);
}
