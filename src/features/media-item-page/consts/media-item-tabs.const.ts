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
  ovas: {
    value: "ovas",
    label: "OVAS",
  },
} satisfies Record<string, MediaItemPageTabConfig>;
