import { MEDIA_TYPE_REPOSITORY, MediaTypeCode } from "@/modules/media-type";
import { MediaTab } from "@/modules/media-tab/types";
import { MEDIA_TABS_REGISTRY } from "@/modules/media-tab/consts";

export function getTabsByMediaType(mediaTypeCode: MediaTypeCode): MediaTab[] {
  const tabs = MEDIA_TYPE_REPOSITORY[mediaTypeCode].tabs;

  return tabs.map((tab) => MEDIA_TABS_REGISTRY[tab]);
}
