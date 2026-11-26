import { InfoIcon, TvIcon } from "lucide-react";
import type { MediaTabCode, MediaTabInfo } from "@/modules/media-tab/types";

export const MEDIA_TABS_CONFIG = {
  info: {
    label: "Informações",
    param: "?tab=info",
    icon: InfoIcon,
  },

  temporadas: {
    label: "Temporadas",
    param: "?tab=temporadas",
    icon: TvIcon,
  },
} satisfies Record<MediaTabCode, MediaTabInfo>;
