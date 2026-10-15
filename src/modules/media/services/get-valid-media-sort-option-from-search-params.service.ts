import { MediaSortOptionKey } from "@/modules/media/types";
import { MEDIA_SORT_OPTION_LIST } from "@/modules/media/consts";

export function getValidMediaSortOptionFromSearchParams(
  sortParams: string,
): MediaSortOptionKey {
  const option = MEDIA_SORT_OPTION_LIST.find(({ code }) => code === sortParams);

  return option?.code ?? "title-asc";
}
