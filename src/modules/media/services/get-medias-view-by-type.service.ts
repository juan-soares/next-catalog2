import { MEDIA_VIEW_MOCK } from "@/shared/mocks";

import type { MediaTypeCode } from "@/modules/media-type/types";
import type { MediaView } from "@/modules/media/types";

export async function getMediasViewByType(
  mediaTypeCode: MediaTypeCode,
): Promise<MediaView[]> {
  return MEDIA_VIEW_MOCK.filter(
    (media) => media.info.type.code === mediaTypeCode,
  );
}
