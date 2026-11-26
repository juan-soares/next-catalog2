import type { MediaCategoryCode } from "@/modules/media-category/types";
import type { MediaViewBase, MediaViewCollection } from "@/modules/media/types";

export type MediaViewEpisodicFamily = MediaViewBase & {
  categoryCode: Extract<MediaCategoryCode, "anime" | "series" | "cartoon">;

  collections: {
    seasons: MediaViewCollection[];
    ovas: MediaViewCollection[];
    specials: MediaViewCollection[];
  };
};
