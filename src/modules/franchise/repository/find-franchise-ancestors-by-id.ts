import { Types } from "mongoose";
import { connectToMongoDB } from "@/shared/libs/mongoose";
import type { FranchiseDoc, FranchiseView } from "@/modules/franchise/types";
import { FranchiseModel } from "@/modules/franchise/models";
import { mapFranchiseDocToFranchiseView } from "../mappers";

export async function findFranchiseAncestorsById(
  _id: Types.ObjectId,
): Promise<FranchiseView[]> {
  await connectToMongoDB();

  const [result] = await FranchiseModel.aggregate<{
    ancestors: (FranchiseDoc & { depth: number })[];
  }>([
    {
      $match: { _id },
    },
    {
      $graphLookup: {
        from: "franchises",
        startWith: "$parentFranchiseId",
        connectFromField: "parentFranchiseId",
        connectToField: "_id",
        as: "ancestors",
        depthField: "depth",
      },
    },
    {
      $project: {
        ancestors: 1,
      },
    },
  ]);

  return (result?.ancestors ?? [])
    .sort((a, b) => b.depth - a.depth)
    .map(mapFranchiseDocToFranchiseView);
}
