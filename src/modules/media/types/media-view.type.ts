import type { AttributeView } from "@/modules/attribute/types";
import { FranchiseView } from "@/modules/franchise/types";
import type { MediaTypeView } from "@/modules/media-type/types";
import type {
  MediaImageView,
  MediaProgress,
  MediaFileView,
  MediaCardView,
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
    franchises: FranchiseView[];

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

  assets: {
    cover: MediaImageView;
    trailer: MediaFileView | null;
  };

  gameExpansions: {
    type: "dlc" | "expansion" | null;
    baseMedia: MediaCardView | null;
    dlcs: MediaCardView[];
    expansions: MediaCardView[];
  };

  sequel: {
    previous: MediaCardView | null;
    next: MediaCardView | null;
  };

  progress: MediaProgress;
};
