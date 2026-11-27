import { MediaCategoriesStructureCode } from "@/modules/media-category-structure/types";
import { MediaCategoryCode } from "@/modules/media-category/types";
import type {
  MediaViewBase,
  MediaViewCollection,
} from "@/modules/media/types/media-view";

export type MediaViewMusicStructure = MediaViewBase & {
  categoryStructure: Extract<MediaCategoriesStructureCode, "music">;
  categoryCode: Extract<MediaCategoryCode, "music">;

  details: {
    collections: {
      albums: MediaViewCollection[];
      concerts: MediaViewCollection[];
      singles: MediaViewCollection[];
    };
  };
};
