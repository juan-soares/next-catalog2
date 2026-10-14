import { MediaUnit } from "@/modules/media-unit";

export type MediaGroup = {
  id: string;
  groupType: { label: string };
  number: number;
  title: string;
  translatedTitle: string;
  releaseYear: number;
  resolution: string;
  language: string;
  synopsis: string;
  trailer: { url: string; fileType: string };
  cover: { url: string; alt: string };
  status: {
    acquired: boolean;
    consumed: boolean;
  };
  units: MediaUnit[];
};
