import type { MediaTab, MediaTabCode } from "@/modules/media-tab/types";

export const MEDIA_TAB_REGISTRY = {
  info: {
    code: "info",
    label: "Informações",
    slug: "informacoes",
    group: ["game"],
  },

  expansion: {
    code: "expansion",
    label: "Expansões",
    slug: "expansoes",
    group: ["game"],
  },

  sequel: {
    code: "sequel",
    label: "Sequência",
    slug: "sequencia",
    group: ["game"],
  },
} satisfies Record<MediaTabCode, MediaTab>;
