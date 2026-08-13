import { MediaTypeKey } from "@/modules/1-media-type";

export type MediaItemDetails = {
  trailer: string;
  slug: string;
  cover: string;
  title: string;
  translatedTitle?: string;
  releaseYear: string;
  mediaType: { label: string; slug: MediaTypeKey };
  themes: string[];
  synopsis: string;
  acquired: boolean;
  complete: boolean;

  characters: {
    name: string;
    nickname?: string;
    image: string;
    status: string;
  }[];
};
