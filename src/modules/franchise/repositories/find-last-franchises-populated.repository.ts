import { FranchiseModel } from "@/modules/franchise/models";
import type { FranchiseDetails } from "@/modules/franchise/types";
import { mapFranchiseDocPopulatedToDoFranchiseDetails } from "@/modules/franchise/mappers";

export async function findLastFranchisesPopulated(): Promise<
  FranchiseDetails[]
> {
  const lastFranchises = await FranchiseModel.aggregate([
    {
      $lookup: {
        from: "franchises",
        let: { franchiseId: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$parentFranchiseId", "$$franchiseId"],
              },
            },
          },
          {
            $project: {
              _id: 1,
            },
          },
          {
            $limit: 1,
          },
        ],
        as: "children",
      },
    },

    {
      $match: {
        "children.0": { $exists: false },
      },
    },

    {
      $project: {
        _id: 1,
      },
    },
  ]);

  const ids = lastFranchises.map((franchise) => franchise._id);

  const franchisesPopulated = await FranchiseModel.find({
    _id: { $in: ids },
  })
    .populate("logoId")
    .sort({ title: 1 });

  return franchisesPopulated.map(mapFranchiseDocPopulatedToDoFranchiseDetails);
}
