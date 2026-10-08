import { slugify } from "@/shared/libs/helpers";
import { MEDIA_TYPES_REGISTRY, type MediaTypeCode } from "@/modules/media-type";

export function generateMediaSlug(
  title: string,
  releaseYear: number,
  typeCode: MediaTypeCode,
) {
  const typeSlug = MEDIA_TYPES_REGISTRY[typeCode].slug;

  return `${slugify(title)}-${releaseYear}-${slugify(typeSlug)}`;
}
