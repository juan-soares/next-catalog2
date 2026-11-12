import type { MediaTab, MediaTabCode } from "@/modules/media-tab/types";

export const MEDIA_TAB_REGISTRY = {
  info: {
    code: "info",
    label: "Informações",
    slug: "informacoes",
  },
} satisfies Record<MediaTabCode, MediaTab>;
