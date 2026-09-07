import { MediaTypeKey } from "@/modules1/media-type";
import { MEDIA_TYPE_TABS } from "../consts";
import { MediaItemPageTab } from "../types";

export function getMediaItemTabsByMediaType(
  mediaType: MediaTypeKey,
): MediaItemPageTab[] {
  return MEDIA_TYPE_TABS[mediaType];
}
