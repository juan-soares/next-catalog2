import type { MediaImageView, MediaProgress } from "@/modules/media/types";

export type MediaView = {
  identifiers: {
    id: string;
    slug: string;
    path: string;
  };

  info: {
    title: string;
    releaseYear: number;
  };

  assets: {
    cover: MediaImageView;
  };

  progress: MediaProgress;
};
