import type { MediaTabInfo } from "@/modules/media-tab/types";
import { MEDIA_TABS_CONFIG } from "@/modules/media-tab/consts";

export const MEDIA_TABS_INFO_LIST: MediaTabInfo[] =
  Object.values(MEDIA_TABS_CONFIG);
