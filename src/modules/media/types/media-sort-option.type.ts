import type { MediaSortOptionKey } from "@/modules/media/types";

type MediaSortByKey = "title" | "updatedAt" | "createdAt";
type MediaSortOrder = "asc" | "desc";

export type MediaSortOption = {
  code: MediaSortOptionKey;
  label: string;
  sortBy: MediaSortByKey;
  order: MediaSortOrder;
};
