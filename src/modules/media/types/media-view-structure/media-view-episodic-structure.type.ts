import type { MediaCategoriesStructureCode } from "@/modules/media-category-structure/types";
import type { MediaCategoryCode } from "@/modules/media-category/types";
import type {
  MediaViewBase,
  MediaViewCollection,
} from "@/modules/media/types/media-view";

export type MediaViewEpisodicStructure = MediaViewBase & {
  categoryStructure: Extract<MediaCategoriesStructureCode, "episodic">;
  categoryCode: Extract<MediaCategoryCode, "anime" | "series" | "cartoon">;

  details: {
    collections: {
      seasons: MediaViewCollection[];
      ovas: MediaViewCollection[];
      specials: MediaViewCollection[];
    };
  };
};
