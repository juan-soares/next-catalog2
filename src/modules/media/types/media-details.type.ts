import { MediaCharacter } from "@/modules/media-character";
import { MediaGroup } from "@/modules/media-group";
import { MediaTypeCode } from "@/modules/media-type";

export type MediaDetails = {
  id: string;
  slug: string;
  path: string;

  title: string;
  translatedTitle: string;
  releaseYear: number;
  type: {
    label: string;
    path: string;
    code: MediaTypeCode;
  };
  synopsis: string;
  languages: string[];

  themes: { label: string }[];

  cover: {
    url: string;
    alt: string;
  };

  trailer: {
    url: string;
    fileType: string;
  };

  characters: MediaCharacter[];

  gameDetails?: {
    platforms: string[];
    genres: string[];
    gameplay: string;
    modes: string[];
    players: {
      min: number;
      max: number;
    };
  };

  gameEdition?: {
    base: {
      title: string;
      cover: { url: string; alt: string };
      releaseYear: number;
      path: string;
    } | null;
    dlcs: {
      title: string;
      cover: { url: string; alt: string };
      releaseYear: number;
      path: string;
    }[];
    expansions: {
      title: string;
      cover: { url: string; alt: string };
      releaseYear: number;
      path: string;
    }[];
  };

  seasons?: MediaGroup[];
  ovas?: MediaGroup[];
  specials?: MediaGroup[];

  volumes?: MediaGroup[];
  albums?: MediaGroup[];
  concerts?: MediaGroup[];

  sequel: {
    previous?: {
      title: string;
      releaseYear: number;
      path: string;
      cover: { url: string; alt: string };
    };
    next?: {
      title: string;
      releaseYear: number;
      path: string;
      cover: { url: string; alt: string };
    };
  };

  gallery: { fileName: string; url: string; alt: string }[];
  files: {
    label: string;
    fileName: string;
    fileType: string;
    fileSize: string;
  }[];

  franchises: {
    title: string;
    slug: string;
    path: string;
    logo: { url: string; alt: string };
  }[];

  status: {
    acquired: boolean;
    consumed: boolean;
  };
};
