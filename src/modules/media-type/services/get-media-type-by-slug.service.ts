import { MEDIA_TYPES_LIST } from "@/modules/media-type/consts";
import { MediaType } from "@/modules/media-type/types";

export function getMediaTypeBySlug(slug: string): MediaType | null {
  return MEDIA_TYPES_LIST.find((mediaType) => mediaType.slug === slug) ?? null;
}
