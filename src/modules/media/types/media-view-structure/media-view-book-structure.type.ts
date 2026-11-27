import type { MediaCategoriesStructureCode } from "@/modules/media-category-structure/types";
import type { MediaCategoryCode } from "@/modules/media-category/types";
import type { MediaViewBase } from "@/modules/media/types/media-view";

export type MediaViewBookStructure = MediaViewBase & {
  categoryStructure: Extract<MediaCategoriesStructureCode, "book">;
  categoryCode: Extract<MediaCategoryCode, "book">;
};
