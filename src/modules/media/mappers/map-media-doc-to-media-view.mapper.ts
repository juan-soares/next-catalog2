import { mapAttributeDocToAttributeView } from "@/modules/attribute/mappers";
import type { FranchiseView } from "@/modules/franchise/types";
import { MEDIA_TYPES_REGISTRY } from "@/modules/media-type/consts";
import type { MediaDoc, MediaView } from "@/modules/media/types";
import { PUBLIC_URLS } from "@/shared/consts";

export function mapMediaDocToMediaView(
  doc: MediaDoc,
  franchises: FranchiseView[],
): MediaView {
  return {
    identifiers: {
      id: doc._id.toString(),
      ...doc.identifiers,
    },

    info: {
      title: doc.info.title,
      translatedTitle: doc.info.translatedTitle,
      releaseYear: new Date(doc.info.releaseDate).getFullYear(),
      releaseDate: doc.info.releaseDate,
      type: MEDIA_TYPES_REGISTRY[doc.info.typeCode],
      synopsis: doc.info.synopsis,
    },

    attributes: {
      languages: doc.attributes.languageIds.map(mapAttributeDocToAttributeView),
      themes: doc.attributes.themeIds.map(mapAttributeDocToAttributeView),
      franchises,
    },

    assets: {
      cover: {
        url: `${PUBLIC_URLS.MEDIAS.ASSETS}/${doc.identifiers.slug}/cover.jpg`,
        alt: `Capa da mídia ${doc.info.title}`,
      },
      trailer: doc.assets.trailer
        ? {
            url: `${PUBLIC_URLS.MEDIAS.ASSETS}/${doc.identifiers.slug}/trailer.mp4`,
            fileType: doc.assets.trailer.mimeType,
          }
        : null,
    },

    progress: {
      ...doc.progress,
    },
  };
}
