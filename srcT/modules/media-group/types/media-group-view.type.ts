import type { MediaImageView, MediaStatus } from "@/modules/media/types";

export type MediaUnitView = {
  id: string;
  number: number;
  title: string;
  status: MediaStatus;
};

export type MediaGroupView = {
  id: string;
  groupType: { label: string };
  number: number;
  title: string;
  translatedTitle: string;
  releaseYear: number;
  resolution?: { label: string };
  language: { label: string };
  synopsis: string;
  cover: MediaImageView;
  trailer?: { url: string; fileType: string };
  status: MediaStatus;

  episodes?: MediaUnitView[];
  tracks?: MediaUnitView[];
  volumes?: MediaUnitView[];
};
