import { MediaTypeCode } from "@/modules/media-type";

export type Season = {
  id: string;
  groupType: string;
  number: number;
  releaseYear: string;
  title: string;
  translatedTitle: string;
  language: string;
  resolution: string;
  cover: {
    url: string;
    alt: string;
  };
  trailer: {
    url: string;
    fileType: string;
  };
  synopsis: string;
  status: { acquired: boolean; consumed: boolean };
  episodes: {
    id: string;
    number: number;
    title: string;
    status: { acquired: boolean; consumed: boolean };
  }[];
};

export type OVA = {
  id: string;
  groupType: string;
  number: number;
  releaseYear: string;
  title: string;
  translatedTitle: string;
  language: string;
  resolution: string;
  cover: {
    url: string;
    alt: string;
  };
  trailer: {
    url: string;
    fileType: string;
  };
  synopsis: string;
  status: { acquired: boolean; consumed: boolean };
  episodes: {
    id: string;
    number: number;
    title: string;
    status: { acquired: boolean; consumed: boolean };
  }[];
};

export type MediaDetails = {
  slug: string;

  title: string;
  translatedTitle: string;
  releaseYear: string;
  type: {
    label: string;
    path: string;
    code: MediaTypeCode;
  };
  synopsis: string;

  themes: { label: string }[];

  cover: {
    url: string;
    alt: string;
  };

  trailer: {
    url: string;
    fileType: string;
  };

  seasons?: Season[];
  ovas?: OVA[];

  franchises: { title: string; logo: { url: string; alt: string } }[];

  status: {
    acquired: boolean;
    consumed: boolean;
  };
};
