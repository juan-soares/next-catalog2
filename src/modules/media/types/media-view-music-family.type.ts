import type { MediaCategoryCode } from "@/modules/media-category/types";
import type { MediaViewBase, MediaViewCollection } from "@/modules/media/types";

export type MediaViewMusicFamily = MediaViewBase & {
  categoryCode: Extract<MediaCategoryCode, "music">;

  collections: {
    albums: MediaViewCollection[];
    concerts: MediaViewCollection[];
    singles: MediaViewCollection[];
  };
};
