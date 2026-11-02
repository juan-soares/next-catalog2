import { MediaTab } from "@/modules/media-tab/types";
import { MEDIA_TABS_REGISTRY } from "@/modules/media-tab/consts";
import type { MediaTypeCode } from "@/modules/media-type/types";
import { MEDIA_TYPE_REGISTRY } from "@/modules/media-type/consts";

export function getTabsByMediaType(mediaTypeCode: MediaTypeCode): MediaTab[] {
  const tabs = MEDIA_TYPE_REGISTRY[mediaTypeCode].tabs;

  return tabs.map((tab) => MEDIA_TABS_REGISTRY[tab]);
}
