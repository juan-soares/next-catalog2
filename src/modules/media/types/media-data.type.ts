import type { MediaTypeCode } from "@/modules/media-type/types";
import type { AssetData } from "@/modules/asset/types";
import type { MediaProgress } from "@/modules/media/types";

export type MediaData = {
  identifiers: {
    slug: string;
    path: string;
  };

  info: {
    title: string;
    translatedTitle: string;
    releaseDate: Date;
    typeCode: MediaTypeCode;
    synopsis: string;
  };

  attributes: {
    languageIds: string[];
    themeIds: string[];
    franchiseId: string;
    gameDetails?: {
      platformIds: string[];
      genreIds: string[];
      gameplayIds: string[];
      modeIds: string[];
      players: {
        min: number;
        max: number;
      };
    };
  };

  assets: {
    cover: AssetData;
    trailer: AssetData | null;
  };

  sequel: {
    previousMediaId: string | null;
  };

  progress: MediaProgress;
};
