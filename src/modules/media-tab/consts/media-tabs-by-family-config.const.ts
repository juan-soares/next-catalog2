import type { MediaFamilyCode } from "@/modules/media-family/types";
import type { MediaTabCode } from "@/modules/media-tab/types";

export const MEDIA_TABS_BY_FAMILY_CONFIG = {
  episodic: ["info", "temporadas"],
  game: ["info"],
  movie: ["info"],
  book: ["info"],
  volumes: ["info"],
  music: ["info"],
} satisfies Record<MediaFamilyCode, MediaTabCode[]>;
