import type { MediaType } from "@/modules/media-type";

export type MediaDetails = {
  id: string;
  slug: string;
  title: string;
  translatedTitle: string;
  releaseDate: string;
  releaseYear: number;
  type: MediaType;
  synopsis: string;

  cover: { url: string; alt: string };
  trailer: { url: string };

  themes: { id: string; label: string }[];

  seasons?: {
    id: string;
    number: number;
    title: string;
    releaseYear: number;
    resolution: string;
    language: string;
    synopsis: string;
    opening: { url: string };
    episodes: {
      id: string;
      number: number;
      title: string;
      userStatus: {
        acquired: boolean;
        consumed: boolean;
      };
    }[];
  }[];

  ovas?: {
    id: string;
    number: number;
    title: string;
    releaseYear: number;
    resolution: string;
    language: string;
    episodes: {
      id: string;
      number: number;
      title: string;
      userStatus: {
        acquired: boolean;
        consumed: boolean;
      };
    }[];
  }[];

  specials?: {
    id: string;
    number: number;
    title: string;
    releaseYear: number;
    resolution: string;
    language: string;
    episodes: {
      id: string;
      number: number;
      title: string;
      userStatus: {
        acquired: boolean;
        consumed: boolean;
      };
    }[];
  }[];

  edition?: {
    base: MediaDetails;
    expansions: MediaDetails[];
    dlcs: MediaDetails[];
  };

  continuity: {
    previous?: Pick<MediaDetails, "id" | "title" | "releaseDate" | "cover">;
    next?: Pick<MediaDetails, "id" | "title" | "releaseDate" | "cover">;
  };

  files: {
    id: string;
    name: string;
    size: number;
    sizeLabel: string;
    extension: string;
    mimeType: string;
    downloadUrl: string;
  }[];

  gallery: {
    id: string;
    imageUrl: string;
    thumbnailUrl: string;
    title: string;
  }[];

  franchises: {
    id: string;
    logo: { url: string; alt: string };
    title: string;
  }[];

  userStatus: {
    acquired: boolean;
    consumed: boolean;
  };
};
