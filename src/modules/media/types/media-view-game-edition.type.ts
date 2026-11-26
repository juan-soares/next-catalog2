import type { MediaViewLabel, MediaViewRelated } from "@/modules/media/types";

export type MediaViewEdition = {
  type: MediaViewLabel;

  base: MediaViewRelated | null;

  dlcs: MediaViewRelated[];
  expansions: MediaViewRelated[];
};
