import { MediaTypeKey } from "@/modules/media-type";

export type MediaItem = {
  title: string;
  translatedTitle?: string;

  slug: string;
  mediaType: MediaTypeKey;

  releaseDate: Date;

  cover: string;
};
