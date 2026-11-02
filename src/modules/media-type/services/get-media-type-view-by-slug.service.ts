import type { MediaTypeView } from "@/modules/media-type/types";
import { MEDIA_TYPE_LIST } from "@/modules/media-type/consts";

export function getMediaTypeViewBySlug(slug: string): MediaTypeView | null {
  return MEDIA_TYPE_LIST.find((mediaType) => mediaType.slug === slug) || null;
}
