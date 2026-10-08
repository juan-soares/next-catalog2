import type { QueryFilter } from "mongoose";
import type { FranchiseDoc } from "@/entities/franchise/types";

export type FindFranchiseFilters = {
  id?: string;
  title?: string;
  translatedTitle?: string;
  parentFranchiseId?: string | null;
};

export type FindFranchiseMongoFilters = QueryFilter<FranchiseDoc>;
