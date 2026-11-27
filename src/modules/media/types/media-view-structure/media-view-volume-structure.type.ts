import type { MediaCategoriesStructureCode } from "@/modules/media-category-structure/types";
import type { MediaCategoryCode } from "@/modules/media-category/types";
import type {
  MediaViewBase,
  MediaViewCollection,
} from "@/modules/media/types/media-view";

export type MediaViewVolumeStructure = MediaViewBase & {
  categoryStructure: Extract<MediaCategoriesStructureCode, "volume">;
  categoryCode: Extract<MediaCategoryCode, "comic" | "manga">;

  details: {
    collections: {
      issues: MediaViewCollection[];
      annuals: MediaViewCollection[];
      specials: MediaViewCollection[];
    };
  };
};
