import type { MediaTypeCode } from "@/modules/media-type/types";
import type { MediaView } from "@/modules/media/types";
import { mediaRepository } from "@/modules/media/repository";

export async function getMediasViewByType(
  mediaTypeCode: MediaTypeCode,
): Promise<MediaView[]> {
  return mediaRepository.findMany({
    fields: {
      "info.typeCode": mediaTypeCode,
    },
  });
}
