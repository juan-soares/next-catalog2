import { Types } from "mongoose";
import { connectToMongoDB } from "@/shared/libs/mongoose";
import type { FranchiseDoc, FranchiseView } from "@/modules/franchise/types";
import { FranchiseModel } from "@/modules/franchise/models";
import { mapFranchiseDocToFranchiseView } from "@/modules/franchise/mappers";

export async function findFranchiseAncestorsById(
  _id: Types.ObjectId,
): Promise<FranchiseView[]> {
  await connectToMongoDB();

  const [result] = await FranchiseModel.aggregate<{
    franchise: FranchiseDoc;
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
        franchise: "$$ROOT",
        ancestors: 1,
      },
    },
  ]);

  if (!result) return [];

  const items = [...result.ancestors, { ...result.franchise, depth: -1 }];

  return items
    .sort((a, b) => b.depth - a.depth)
    .map(mapFranchiseDocToFranchiseView);
}
