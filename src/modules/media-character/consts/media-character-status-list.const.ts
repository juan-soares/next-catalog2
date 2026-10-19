import type { MediaCharacterStatus } from "@/modules/media-character/types";

export const MEDIA_CHARACTER_STATUS_LIST: MediaCharacterStatus[] = [
  {
    code: "active",
    label: "Ativo",
  },
  {
    code: "dead",
    label: "Morto",
  },
  {
    code: "unknown",
    label: "Desconhecido",
  },
];
