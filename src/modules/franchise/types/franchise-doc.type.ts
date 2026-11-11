import { Types } from "mongoose";
import type { FranchiseData } from "@/modules/franchise/types";

export type FranchiseDoc = Omit<FranchiseData, "parentFranchiseId"> & {
  _id: Types.ObjectId;

  parentFranchiseId: Types.ObjectId | null;
};
