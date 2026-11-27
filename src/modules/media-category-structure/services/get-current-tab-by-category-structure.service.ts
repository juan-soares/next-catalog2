import type { MediaTabCode } from "@/modules/media-tab/types";
import type { MediaCategoriesStructureCode } from "@/modules/media-category-structure/types";
import { MEDIA_TABS_BY_CATEGORIES_STRUCTURE_CONFIG } from "@/modules/media-tab/consts";

export function getCurrentTabByCategoryStructure(
  categoryStructure: MediaCategoriesStructureCode,
  tabParam?: string,
): MediaTabCode {
  const availableTabs: readonly MediaTabCode[] =
    MEDIA_TABS_BY_CATEGORIES_STRUCTURE_CONFIG[categoryStructure];

  if (tabParam && availableTabs.includes(tabParam as MediaTabCode)) {
    return tabParam as MediaTabCode;
  }

  return "info";
}
