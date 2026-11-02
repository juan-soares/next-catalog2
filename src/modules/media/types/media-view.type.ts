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
    releaseDate: Date;
  };

  assets: {
    cover: MediaImageView;
  };

  progress: MediaProgress;
};
