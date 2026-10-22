import type { MediaStatus } from "@/modules/media/types";
import type { MediaTypeCode } from "@/modules/media-type/types";

export type Media = {
  id: string;
  slug: string;
  path: string;

  title: string;
  translatedTitle: string;
  releaseYear: number;
  typeCode: MediaTypeCode;
  synopsis: string;

  languageIds: string[];
  themeIds: string[];

  coverAssetId: string;
  trailerAssetId?: string;

  characterIds: string[];

  gameDetails?: {
    platformIds: string[];
    genreIds: string[];
    gameplayId: string;
    modeIds: string[];
    players: {
      min: number;
      max: number;
    };
  };
  gameEdition?: {
    baseId: string | null;
    dlcIds: string[];
    expansionIds: string[];
  };

  seasonIds?: string[];
  ovaIds?: string[];
  specialIds?: string[];
  volumeIds?: string[];
  albumIds?: string[];
  concertIds?: string[];

  previousMediaId?: string;
  nextMediaId?: string;

  galleryAssetIds: string[];
  fileAssetIds: string[];

  franchiseIds: string[];

  status: MediaStatus;
};
