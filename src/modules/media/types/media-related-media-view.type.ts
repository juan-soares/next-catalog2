import type { MediaImageView } from "@/modules/media/types";

//Mídia anterior ou seguinte, usada em sequel.
export type MediaRelatedMediaView = {
  title: string;
  cover: MediaImageView;
  releaseYear: number;
  path: string;
};
