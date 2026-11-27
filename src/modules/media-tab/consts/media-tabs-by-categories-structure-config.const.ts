import type { MediaCategoriesStructureCode } from "@/modules/media-category-structure/types";
import type { MediaTabCode } from "@/modules/media-tab/types";

export const MEDIA_TABS_BY_CATEGORIES_STRUCTURE_CONFIG = {
  episodic: ["info", "temporadas"],
  game: ["info"],
  movie: ["info"],
  book: ["info"],
  volume: ["info"],
  music: ["info"],
} satisfies Record<MediaCategoriesStructureCode, MediaTabCode[]>;
