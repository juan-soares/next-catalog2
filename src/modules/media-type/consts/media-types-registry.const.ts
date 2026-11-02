import type { MediaTypeCode, MediaTypeView } from "@/modules/media-type/types";

export const MEDIA_TYPES_REGISTRY = {
  "board-game": {
    code: "board-game",
    slug: "jogos-de-tabuleiro",
    label: "Jogos de Tabuleiro",
  },
} satisfies Record<MediaTypeCode, MediaTypeView>;
