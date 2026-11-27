import type {
  MediaViewLabel,
  MediaViewRelated,
} from "@/modules/media/types/media-view";

export type MediaViewGameEdition = {
  type: MediaViewLabel;

  base: MediaViewRelated | null;
  dlcs: MediaViewRelated[];
  expansions: MediaViewRelated[];
};
