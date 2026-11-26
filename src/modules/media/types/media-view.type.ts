import type { MediaCategoryCode } from "@/modules/media-category/types";

export type MediaView = {
  id: string;
  slug: string;
  categoryCode: MediaCategoryCode;
};
