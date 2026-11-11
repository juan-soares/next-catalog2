"use server";

import { connectToMongoDB } from "@/shared/libs/mongoose";
import type { FranchiseView } from "@/modules/franchise/types";
import { FranchiseModel } from "@/modules/franchise/models";
import { mapFranchiseDocToFranchiseView } from "@/modules/franchise/mappers";

export async function findChildlessFranchises(): Promise<FranchiseView[]> {
  await connectToMongoDB();

  const docs = await FranchiseModel.aggregate([
    {
      $lookup: {
        from: "franchises",
        localField: "_id",
        foreignField: "parentFranchiseId",
        as: "children",
      },
    },
    {
      $match: {
        children: { $size: 0 },
      },
    },
    {
      $project: {
        children: 0,
      },
    },
  ]);

  return docs.map(mapFranchiseDocToFranchiseView);
}
