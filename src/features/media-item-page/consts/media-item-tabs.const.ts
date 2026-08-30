import { MediaItemPageTabConfig } from "../types";

export const MEDIA_ITEM_TABS = {
  info: {
    value: "info",
    label: "Informações",
  },
  seasons: {
    value: "seasons",
    label: "Temporadas",
  },
} satisfies Record<string, MediaItemPageTabConfig>;
