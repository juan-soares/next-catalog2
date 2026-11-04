import type { MediaTypeView } from "@/modules/media-type/types";
import type {
  MediaImageView,
  MediaProgress,
  MediaFileView,
  MediaAttributeView,
} from "@/modules/media/types";

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
    synopsis: string;
  };

  attributes: {
    languages: MediaAttributeView[];
    themes: MediaAttributeView[];
  };

  assets: {
    cover: MediaImageView;
    trailer: MediaFileView | null;
  };

  progress: MediaProgress;
};
