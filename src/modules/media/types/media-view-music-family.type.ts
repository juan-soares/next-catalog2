import type { MediaViewBase, MediaViewCollection } from "@/modules/media/types";

export type MediaViewMusicFamily = MediaViewBase & {
  categoryCode: "music-artist";

  collections: {
    albums: MediaViewCollection[];
    concerts: MediaViewCollection[];
    singles: MediaViewCollection[];
  };
};
