import { MediaTypeCode } from "@/modules/media-type";
import { MediaDetails } from "@/modules/media/types";

import { MEDIAS_MOCK } from "../consts/mock.const";

export async function getMediasDetailsByType(
  type: MediaTypeCode,
): Promise<MediaDetails[]> {
  return MEDIAS_MOCK.filter((media) => media.type.code === type);
}
