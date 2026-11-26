import type {
  MediaViewImage,
  MediaViewLabel,
  MediaViewStatus,
  MediaViewUnit,
} from "@/modules/media/types";

export type MediaViewCollection = {
  id: string;
  number: number;
  title: string;
  releaseYear: number;

  languages: MediaViewLabel[];
  resolutions: MediaViewLabel[];

  cover: MediaViewImage;
  synopsis: string;

  status: MediaViewStatus;
  units: MediaViewUnit[];
};
