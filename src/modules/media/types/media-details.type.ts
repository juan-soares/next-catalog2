import { MediaGroup } from "@/modules/media-group";
import { MediaTypeCode } from "@/modules/media-type";

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

  seasons?: MediaGroup[];
  ovas?: MediaGroup[];
  specials?: MediaGroup[];

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
