import type {
  MediaViewImage,
  MediaViewLabel,
  MediaViewRelease,
  MediaViewStatus,
} from "@/modules/media/types";

export type MediaViewIssue = {
  id: string;
  number: number;
  title: string;

  release: MediaViewRelease;

  languages: MediaViewLabel[];
  resolutions: MediaViewLabel[];

  cover: MediaViewImage;
  synopsis: string;

  status: MediaViewStatus;
};
