import type { MediaCharacterView } from "@/modules/media-character/types";
import type { MediaFileView } from "@/modules/media-file/types";
import type { FranchiseView } from "@/modules/franchise/types";
import type {
  MediaImageView,
  MediaRelatedMediaView,
  MediaStatus,
  MediaTrailerView,
} from "@/modules/media/types";
import type {
  MediaEpisodeGroupView,
  MediaMusicGroupView,
  MediaVolumeView,
} from "@/modules/media-group/types";

export type MediaView = {
  id: string;
  slug: string;
  path: string;

  title: string;
  translatedTitle: string;
  releaseYear: number;
  type: {
    label: string;
  };
  synopsis: string;

  languages: { label: string }[];
  themes: { label: string }[];

  cover: MediaImageView;
  trailer?: MediaTrailerView;

  characters: MediaCharacterView[];

  gameDetails?: {
    platforms: { label: string }[];
    genres: { label: string }[];
    gameplay: { label: string };
    modes: { label: string }[];
    players: {
      min: number;
      max: number;
    };
  };

  gameEdition?: {
    base: MediaRelatedMediaView | null;
    dlcs: MediaRelatedMediaView[];
    expansions: MediaRelatedMediaView[];
  };

  seasons?: MediaEpisodeGroupView[];
  ovas?: MediaEpisodeGroupView[];
  specials?: MediaEpisodeGroupView[];

  volumes?: MediaVolumeView[];

  albums?: MediaMusicGroupView[];
  concerts?: MediaMusicGroupView[];

  sequel: {
    previous?: MediaRelatedMediaView;
    next?: MediaRelatedMediaView;
  };

  gallery: MediaImageView[];
  files: MediaFileView[];

  franchises: FranchiseView[];

  status: MediaStatus;
};
