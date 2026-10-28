import type {
  MediaGameEdition,
  MediaGameEditionCode,
} from "@/modules/media/types";

export const MEDIA_GAME_EDITIONS_REGISTRY = {
  base: {
    code: "base",
    label: "Base",
  },

  dlc: {
    code: "dlc",
    label: "DLC",
  },

  expansion: {
    code: "expansion",
    label: "Expansão",
  },
} satisfies Record<MediaGameEditionCode, MediaGameEdition>;
