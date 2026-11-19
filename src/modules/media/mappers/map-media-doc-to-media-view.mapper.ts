import { mapAttributeDocToAttributeView } from "@/modules/attribute/mappers";
import type { FranchiseView } from "@/modules/franchise/types";
import { MEDIA_TYPES_REGISTRY } from "@/modules/media-type/consts";
import type {
  MediaPopulatedDoc,
  MediaView,
  RelatedMediaDoc,
} from "@/modules/media/types";
import { PUBLIC_URLS } from "@/shared/consts";
import { mapMediaDocToMediaCardView } from "@/modules/media/mappers";

export function mapMediaDocToMediaView(
  doc: MediaPopulatedDoc,
  franchises: FranchiseView[],
  nextMediaDoc: RelatedMediaDoc | null,
  gameExpansions: {
    dlcs: RelatedMediaDoc[];
    expansions: RelatedMediaDoc[];
  },
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

      ...(doc.attributes.gameDetails && {
        gameDetails: {
          platforms: doc.attributes.gameDetails.platformIds.map(
            mapAttributeDocToAttributeView,
          ),
          genres: doc.attributes.gameDetails.genreIds.map(
            mapAttributeDocToAttributeView,
          ),
          gameplays: doc.attributes.gameDetails.gameplayIds.map(
            mapAttributeDocToAttributeView,
          ),
          modes: doc.attributes.gameDetails.modeIds.map(
            mapAttributeDocToAttributeView,
          ),
          players: doc.attributes.gameDetails.players,
        },
      }),
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

    gameExpansions: {
      type: doc.gameExpansions?.type ?? null,

      baseMedia: doc.gameExpansions?.baseMediaId
        ? mapMediaDocToMediaCardView(doc.gameExpansions.baseMediaId)
        : null,

      dlcs: gameExpansions.dlcs.map(mapMediaDocToMediaCardView),

      expansions: gameExpansions.expansions.map(mapMediaDocToMediaCardView),
    },

    sequel: {
      previous: doc.sequel.previousMediaId
        ? mapMediaDocToMediaCardView(doc.sequel.previousMediaId)
        : null,

      next: nextMediaDoc ? mapMediaDocToMediaCardView(nextMediaDoc) : null,
    },

    progress: {
      ...doc.progress,
    },
  };
}
