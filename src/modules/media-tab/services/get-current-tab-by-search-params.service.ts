import type { MediaTabCode } from "@/modules/media-tab/types";
import { MEDIA_TABS_CODE_LIST } from "@/modules/media-tab/consts";

export function getCurrentTabBySearchParam(
  tabParam: string | undefined,
): MediaTabCode {
  return MEDIA_TABS_CODE_LIST.includes(tabParam as MediaTabCode)
    ? (tabParam as MediaTabCode)
    : "info";
}
