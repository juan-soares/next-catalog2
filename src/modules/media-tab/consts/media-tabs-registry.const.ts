import { MediaTab, MediaTabCode } from "@/modules/media-tab/types";
import {
  MediaTabInfo,
  MediaTabSeasons,
  MediaTabOvas,
  MediaTabSpecials,
} from "@/modules/media-tab/components";

export const MEDIA_TABS_REGISTRY = {
  info: {
    label: "Detalhes",
    code: "info",
    slug: "info",
    component: MediaTabInfo,
  },
  season: {
    label: "Temporadas",
    code: "season",
    slug: "temporadas",
    component: MediaTabSeasons,
  },
  ova: {
    label: "OVAS",
    code: "ova",
    slug: "ovas",
    component: MediaTabOvas,
  },
  special: {
    label: "Especiais",
    code: "special",
    slug: "especiais",
    component: MediaTabSpecials,
  },
} satisfies Record<MediaTabCode, MediaTab>;
