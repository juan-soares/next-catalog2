import type { MediaCategoryInfo } from "@/modules/media-category/types";

import { MEDIA_CATEGORIES_CONFIG } from "@/modules/media-category/consts";

export const MEDIA_CATEGORIES_INFO_LIST: MediaCategoryInfo[] = Object.values(
  MEDIA_CATEGORIES_CONFIG,
).sort(
  (a, b) =>
    a.familyCode.localeCompare(b.familyCode) ||
    a.label.localeCompare(b.label, "pt-BR"),
);
