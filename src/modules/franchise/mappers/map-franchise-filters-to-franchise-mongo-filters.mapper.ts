import type {
  FindFranchiseFilters,
  FindFranchiseMongoFilters,
} from "@/modules/franchise/types";

export function mapFindFranchiseFiltersToFindFranchiseMongoFilters(
  filters: FindFranchiseFilters,
): FindFranchiseMongoFilters {
  const { id, ...rest } = filters;

  return {
    ...rest,
    ...(id !== undefined && { _id: id }),
  };
}
