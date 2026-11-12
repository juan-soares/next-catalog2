import type { MediaTab } from "@/modules/media-tab/types";
import { MEDIA_TAB_LIST, MEDIA_TAB_REGISTRY } from "@/modules/media-tab/consts";

export function getMediaTabInfoBySlug(slug: string): MediaTab {
  return (
    MEDIA_TAB_LIST.find((tab) => tab.slug === slug) ??
    MEDIA_TAB_REGISTRY["info"]
  );
}
