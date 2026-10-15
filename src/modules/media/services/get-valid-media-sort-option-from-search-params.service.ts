import { MediaSortOptionKey } from "@/modules/media/types";
import { MEDIA_SORT_OPTIONS_REGISTRY } from "@/modules/media/consts";

export function getValidMediaSortOptionFromSearchParams(
  sortParams: string | string[] | undefined,
): MediaSortOptionKey {
  if (
    typeof sortParams === "string" &&
    Object.hasOwn(MEDIA_SORT_OPTIONS_REGISTRY, sortParams)
  ) {
    return sortParams as MediaSortOptionKey;
  }

  return "title-asc";
}
