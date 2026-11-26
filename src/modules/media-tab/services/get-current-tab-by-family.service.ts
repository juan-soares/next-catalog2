import type { MediaFamilyCode } from "@/modules/media-family/types";
import type { MediaTabCode } from "@/modules/media-tab/types";
import { MEDIA_TABS_BY_FAMILY_CONFIG } from "@/modules/media-tab/consts";

export function getCurrentTabByFamily(
  familyCode: MediaFamilyCode,
  tabParam?: string,
): MediaTabCode {
  const availableTabs = MEDIA_TABS_BY_FAMILY_CONFIG[familyCode];

  if (tabParam && availableTabs.includes(tabParam as MediaTabCode)) {
    return tabParam as MediaTabCode;
  }

  return "info";
}
