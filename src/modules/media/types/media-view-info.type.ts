import type {
  MediaViewImage,
  MediaViewRelease,
  MediaViewVideo,
} from "@/modules/media/types";

export type MediaViewInfo = {
  title: string;
  translatedTitle: string | null;

  release: MediaViewRelease;

  synopsis: string;

  cover: MediaViewImage;
  trailer: MediaViewVideo | null;
};
