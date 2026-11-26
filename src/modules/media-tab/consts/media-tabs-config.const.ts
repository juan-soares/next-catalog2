import { InfoIcon } from "lucide-react";
import type { MediaTabCode, MediaTabInfo } from "@/modules/media-tab/types";

export const MEDIA_TABS_CONFIG = {
  info: {
    label: "Informações",
    param: "?tab=info",
    icon: InfoIcon,
  },
} satisfies Record<MediaTabCode, MediaTabInfo>;
