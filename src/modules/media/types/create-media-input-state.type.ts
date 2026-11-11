import type { MediaTypeCode } from "@/modules/media-type/types";
import type { MediaProgress } from "@/modules/media/types";

export type CreateMediaInputState = {
  title: string;
  translatedTitle: string;
  releaseDate: string;
  mediaTypeCode: MediaTypeCode | null;
  synopsis: string;

  cover: File | null;
  trailer: File | null;
  franchiseId: string;

  languageIds: string[];
  themeIds: string[];

  progress: MediaProgress;
};
