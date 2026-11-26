import type {
  MediaViewAttributes,
  MediaViewBase,
  MediaViewEdition,
  MediaViewInfo,
  MediaViewLabel,
} from "@/modules/media/types";

export type MediaViewGameFamily = MediaViewBase & {
  categoryCode: "board-game" | "video-game";

  info: MediaViewInfo & {
    players: {
      min: number;
      max: number;
    };
  };

  attributes: MediaViewAttributes & {
    gameplays: MediaViewLabel[];
    modes: MediaViewLabel[];
  };

  edition: MediaViewEdition;
};
