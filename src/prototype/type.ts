//base

export type MediaUnit = {
  id: string;
  number: number;
  title: string;
  status: MediaStatus;
};

export type MediaCollection = {
  id: string;
  number: number;
  title: string;
  releaseYear: number;

  languages: MediaLabel[];
  resolutions: MediaLabel[];

  cover: MediaImage;
  synopsis: string;

  status: MediaStatus;
  units: MediaUnit[];
};

//relacionamentos
export type MediaCharacter = {
  id: string;
  url: string;
  name: string;
  codenames: MediaLabel[];
  avatar: MediaImage;
  status: MediaLabel;
};

export type MediaReferenceWithCover = {
  id: string;
  slug: string;
  url: string;
  title: string;
  cover: MediaImage;
  release: Pick<MediaRelease, "year">;
};

export type MediaContinuity = {
  previous: MediaReferenceWithCover | null;
  next: MediaReferenceWithCover | null;
};

export type MediaGalleryItem = {
  id: string;
  src: string;
  alt: string;
};

export type MediaFile = {
  id: string;
  title: string;
  src: string;
  extension: string;
};

//base
export type MediaBase = {
  id: string;
  slug: string;
  url: string;

  info: MediaInfo;
  attributes: MediaAttributes;

  characters: MediaCharacter[];
  continuity: MediaContinuity;

  gallery: MediaGalleryItem[];
  files: MediaFile[];

  franchises: MediaFranchises;

  status: MediaStatus;
};

//series
export type EpisodicMedia = MediaBase & {
  category: "anime" | "series" | "cartoon";

  collections: {
    seasons: MediaCollection[];
    ovas: MediaCollection[];
    specials: MediaCollection[];
  };
};

//reading
export type MediaIssue = {
  id: string;
  number: number;
  title: string;

  release: MediaRelease;

  languages: MediaLabel[];
  resolutions: MediaLabel[];

  cover: MediaImage;
  synopsis: string;

  status: MediaStatus;
};

export type ReadingMedia = MediaBase & {
  category: "comic" | "manga";

  collections: {
    issues: MediaIssue[];
    annuals: MediaIssue[];
    specials: MediaIssue[];
  };
};

//music
export type MusicMedia = MediaBase & {
  category: "music-artist";

  collections: {
    albums: MediaCollection[];
    concerts: MediaCollection[];
    singles: MediaCollection[];
  };
};

//movies
export type MovieMedia = MediaBase & {
  category: "live-action-movie" | "animated-movie";
};

//books
export type BookMedia = MediaBase & {
  category: "book";
};

//games
export type MediaEdition = {
  type: MediaLabel;

  base: MediaReferenceWithCover | null;

  dlcs: MediaReferenceWithCover[];
  expansions: MediaReferenceWithCover[];
};

export type GameMedia = MediaBase & {
  category: "board-game" | "video-game";

  info: MediaInfo & {
    players: {
      min: number;
      max: number;
    };
  };

  attributes: MediaAttributes & {
    gameplays: MediaLabel[];
    modes: MediaLabel[];
  };

  edition: MediaEdition;
};

export type MediaView =
  | EpisodicMedia
  | ReadingMedia
  | MusicMedia
  | MovieMedia
  | BookMedia
  | GameMedia;
