import type { MediaViewRelated } from "@/modules/media/types/media-view";

export type MediaViewContinuity = {
  previous: MediaViewRelated | null;
  next: MediaViewRelated | null;
};
