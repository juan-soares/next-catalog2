import { MEDIA_VIEW_MOCK } from "@/app/mocks";
import type { MediaTypeCode } from "@/modules/media-type/types";
import type { MediaSearchOptions, MediaView } from "@/modules/media/types";

export async function getMediasViewByType(
  typeCode: MediaTypeCode,
  searchOptions: MediaSearchOptions,
): Promise<MediaView[]> {
  const { term, sort, filters } = searchOptions;

  return MEDIA_VIEW_MOCK;
}
