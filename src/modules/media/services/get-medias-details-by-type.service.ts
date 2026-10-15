import { MediaTypeCode } from "@/modules/media-type";
import { MediaDetails, MediaSearchOptions } from "@/modules/media/types";

import { MEDIAS_MOCK } from "../consts/mock.const";

export async function getMediasDetailsByType(
  type: MediaTypeCode,
  searchOptions: MediaSearchOptions = {},
): Promise<MediaDetails[]> {
  const { sort = "title-asc", query, filters = {} } = searchOptions;

  return MEDIAS_MOCK.filter((media) => media.type.code === type);
}
