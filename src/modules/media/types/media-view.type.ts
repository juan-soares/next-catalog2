import type { MediaTypeView } from "@/modules/media-type/types";
import type { MediaImageView, MediaProgress } from "@/modules/media/types";

export type MediaView = {
  identifiers: {
    id: string;
    slug: string;
    path: string;
  };

  info: {
    title: string;
    translatedTitle: string;
    releaseYear: number;
    releaseDate: Date;
    type: MediaTypeView;
  };

  assets: {
    cover: MediaImageView;
    trailer: MediaImageView | null;
  };

  progress: MediaProgress;
};
