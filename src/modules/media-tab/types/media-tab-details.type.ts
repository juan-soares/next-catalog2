import { MediaTabCode } from "@/modules/media-tab/types";

export type MediaTabDetails = {
  title: string;
  translatedTitle: string;
  releaseYear: string;

  mediaTypePath: string;
  mediaSlug: string;

  groupType: MediaTabCode;
};
