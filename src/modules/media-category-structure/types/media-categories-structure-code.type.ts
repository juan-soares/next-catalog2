import { MEDIA_CATEGORIES_STRUCTURE_CODE_LIST } from "@/modules/media-category-structure/consts";

export type MediaCategoriesStructureCode =
  (typeof MEDIA_CATEGORIES_STRUCTURE_CODE_LIST)[number];
