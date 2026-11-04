import { MEDIA_TYPES_REGISTRY } from "@/modules/media-type/consts";
import type { MediaData, MediaView } from "@/modules/media/types";

export function mapMediaDataToMediaView(
  id: string,
  mediaData: MediaData,
): MediaView {
  return {
    identifiers: {
      id,
      ...mediaData.identifiers,
    },

    info: {
      title: mediaData.info.title,
      translatedTitle: mediaData.info.translatedTitle,
      releaseYear: new Date(mediaData.info.releaseDate).getFullYear(),
      releaseDate: mediaData.info.releaseDate,
      type: MEDIA_TYPES_REGISTRY[mediaData.info.typeCode],
    },

    assets: {
      cover: {
        url: mediaData.assets.cover.path,
        alt: mediaData.assets.cover.label,
      },
      trailer: mediaData.assets.trailer
        ? {
            url: mediaData.assets.trailer.path,
            alt: mediaData.assets.trailer.label,
          }
        : null,
    },

    progress: {
      ...mediaData.progress,
    },
  };
}
