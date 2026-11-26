import type { MediaViewImage, MediaViewRelease } from "@/modules/media/types";

export type MediaViewRelated = {
  id: string;
  slug: string;
  url: string;
  title: string;
  cover: MediaViewImage;
  release: Pick<MediaViewRelease, "year">;
};
