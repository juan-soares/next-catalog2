import type { MediaCategoriesStructureCode } from "@/modules/media-category-structure/types";
import type { MediaCategoryCode } from "@/modules/media-category/types";
import type {
  MediaViewAttributes,
  MediaViewBase,
  MediaViewGameEdition,
  MediaViewInfo,
  MediaViewLabel,
} from "@/modules/media/types/media-view";

export type MediaViewGameStructure = MediaViewBase & {
  categoryStructure: Extract<MediaCategoriesStructureCode, "game">;
  categoryCode: Extract<MediaCategoryCode, "board-game" | "video-game">;

  info: MediaViewInfo & {
    players: {
      min: number;
      max: number;
    };
  };

  attributes: MediaViewAttributes & {
    gameplays: MediaViewLabel[];
    modes: MediaViewLabel[];
  };

  details: {
    edition: MediaViewGameEdition;
  };
};
