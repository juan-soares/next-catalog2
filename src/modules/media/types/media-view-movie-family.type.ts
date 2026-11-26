import type { MediaCategoryCode } from "@/modules/media-category/types";
import type { MediaViewBase } from "@/modules/media/types";

export type MediaViewMovieFamily = MediaViewBase & {
  categoryCode: Extract<
    MediaCategoryCode,
    "live-action-movie" | "animated-movie"
  >;
};
