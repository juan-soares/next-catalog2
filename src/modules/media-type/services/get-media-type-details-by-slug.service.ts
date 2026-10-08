import { MediaTypeDetails } from "@/modules/media-type/types";
import { MEDIA_TYPES_LIST } from "@/modules/media-type/consts";

export function getMediaTypeDetailsBySlug(
  slugToSearch: string,
): MediaTypeDetails | null {
  return MEDIA_TYPES_LIST.find(({ slug }) => slug === slugToSearch) ?? null;
}
