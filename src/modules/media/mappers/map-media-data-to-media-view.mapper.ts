import { MEDIA_TYPES_REGISTRY } from "@/modules/media-type/consts";
import type { MediaDataPopulated, MediaView } from "@/modules/media/types";

export function mapMediaDataToMediaView(
  id: string,
  mediaData: MediaDataPopulated,
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
      synopsis: mediaData.info.synopsis,
    },

    attributes: {
      languages: mediaData.attributes.languageIds,
      themes: mediaData.attributes.themeIds,
    },

    assets: {
      cover: {
        url: mediaData.assets.cover.path,
        alt: mediaData.assets.cover.label,
      },
      trailer: mediaData.assets.trailer
        ? {
            url: mediaData.assets.trailer.path,
            fileType: mediaData.assets.trailer.mimeType,
          }
        : null,
    },

    progress: {
      ...mediaData.progress,
    },
  };
}
