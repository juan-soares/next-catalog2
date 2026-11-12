import type { AttributeView } from "@/modules/attribute/types";
import { FranchiseView } from "@/modules/franchise/types";
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

    gameDetails?: {
      platforms: AttributeView[];
      genres: AttributeView[];
      gameplays: AttributeView[];
      modes: AttributeView[];
      players: {
        min: number;
        max: number;
      };
    };
  };

  attributes: {
    languages: AttributeView[];
    themes: AttributeView[];
    franchises: FranchiseView[];
  };

  assets: {
    cover: MediaImageView;
    trailer: MediaFileView | null;
  };

  progress: MediaProgress;
};
