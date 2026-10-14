import { MediaTab, MediaTabCode } from "@/modules/media-tab/types";
import { MediaTabInfo } from "@/modules/media-tab/components";
import { MediaTabGroup } from "../components/MediaTabGroup/MediaTabGroup";

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
    component: MediaTabGroup,
  },
} satisfies Record<MediaTabCode, MediaTab>;
