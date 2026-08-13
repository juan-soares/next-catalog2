import { MediaTypeInfo } from "@/modules/1-media-type";

export type MediaItem = {
  id: string;

  slug: string;
  mediaType: MediaTypeInfo;

  title: string;
  translatedTitle?: string;
  releaseDate: Date;

  cover: string;
};
