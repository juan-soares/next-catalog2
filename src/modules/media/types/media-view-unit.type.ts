import type { MediaViewStatus } from "@/modules/media/types";

export type MediaViewUnit = {
  id: string;
  number: number;
  title: string;
  status: MediaViewStatus;
};
