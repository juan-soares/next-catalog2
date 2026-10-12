import { MediaTabCode, MediaTabDetails } from "@/modules/media/types";
import { TabInfo, TabSeasons } from "@/modules/media/components";

export const MEDIA_TABS_REGISTRY = {
  info: { label: "Detalhes", slug: "info", code: "info", component: TabInfo },

  seasons: {
    label: "Temporadas",
    slug: "temporadas",
    code: "seasons",
    component: TabSeasons,
  },
} satisfies Record<MediaTabCode, MediaTabDetails>;
