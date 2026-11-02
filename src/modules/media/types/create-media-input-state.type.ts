import type { MediaTypeCode } from "@/modules/media-type/types";

export type CreateMediaInputState = {
  title: string;
  translatedTitle: string;
  releaseDate: string;
  mediaTypeCode: MediaTypeCode | null;
  cover: File | null;
  trailer: File | null;
};
