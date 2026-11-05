import type { AttributeView } from "@/modules/attribute/types";
import type { MediaTypeView } from "@/modules/media-type/types";
import type {
  MediaImageView,
  MediaProgress,
  MediaFileView,
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
    languages: AttributeView[];
    themes: AttributeView[];
  };

  assets: {
    cover: MediaImageView;
    trailer: MediaFileView | null;
  };

  progress: MediaProgress;
};
