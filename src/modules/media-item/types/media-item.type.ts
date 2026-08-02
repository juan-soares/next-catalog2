import { MediaTypeKey } from "@/modules/media-type";

export type MediaItem = {
  title: string;
  translatedTitle?: string;

  slug: string;
  mediaType: MediaTypeKey;

  releaseDate: Date;

  sinopsys: string;

  cover: string;
  trailer: string;

  themes: string[];

  acquired: boolean;
  complete: boolean;
  characters: {
    name: string;
    nickname?: string;
    image: string;
    status: string;
  }[];
};
