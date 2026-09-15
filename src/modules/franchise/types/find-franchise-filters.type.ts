import type { QueryFilter } from "mongoose";
import type { FranchiseDoc } from "@/modules/franchise/types";

export type FindFranchiseFilters = {
  id?: string;
  title?: string;
  translatedTitle?: string;
  parentFranchiseId?: string | null;
};

export type FranchiseMongoFilter = QueryFilter<FranchiseDoc>;
