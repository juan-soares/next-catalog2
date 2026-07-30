import { MediaTypeKey } from "@/modules/media-type";

export type CreateMediaItemInput = {
  mediaType: MediaTypeKey;

  title: string;
  translatedTitle?: string;

  cover: string;

  releaseDate: Date;
};
