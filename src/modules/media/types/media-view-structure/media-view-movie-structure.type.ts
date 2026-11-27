import type { MediaCategoriesStructureCode } from "@/modules/media-category-structure/types";
import type { MediaCategoryCode } from "@/modules/media-category/types";
import type { MediaViewBase } from "@/modules/media/types/media-view";

export type MediaViewMovieStructure = MediaViewBase & {
  categoryStructure: Extract<MediaCategoriesStructureCode, "movie">;
  categoryCode: Extract<
    MediaCategoryCode,
    "live-action-movie" | "animated-movie"
  >;
};
