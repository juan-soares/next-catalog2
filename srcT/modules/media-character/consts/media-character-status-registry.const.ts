import type {
  MediaCharacterStatus,
  MediaCharacterStatusCode,
} from "@/modules/media-character/types";

export const MEDIA_CHARACTER_STATUS_REGISTRY = {
  active: {
    code: "active",
    label: "Ativo",
  },
  dead: {
    code: "dead",
    label: "Morto",
  },
  unknown: {
    code: "unknown",
    label: "Desconhecido",
  },
} satisfies Record<MediaCharacterStatusCode, MediaCharacterStatus>;
