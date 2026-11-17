import type { MediaTab, MediaTabCode } from "@/modules/media-tab/types";

export const MEDIA_TAB_REGISTRY = {
  info: {
    code: "info",
    label: "Informações",
    slug: "informacoes",
  },

  sequel: {
    code: "sequel",
    label: "Sequência",
    slug: "sequencia",
  },
} satisfies Record<MediaTabCode, MediaTab>;
