import type { MediaViewBase, MediaViewCollection } from "@/modules/media/types";

export type MediaViewEpisodicFamily = MediaViewBase & {
  categoryCode: "anime" | "series" | "cartoon";

  collections: {
    seasons: MediaViewCollection[];
    ovas: MediaViewCollection[];
    specials: MediaViewCollection[];
  };
};
