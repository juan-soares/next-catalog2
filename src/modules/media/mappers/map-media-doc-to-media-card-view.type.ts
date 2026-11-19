import { PUBLIC_URLS } from "@/shared/consts";
import type { MediaCardView, RelatedMediaDoc } from "@/modules/media/types";

export function mapMediaDocToMediaCardView(
  doc: RelatedMediaDoc,
): MediaCardView {
  return {
    identifiers: {
      id: doc._id.toString(),
      path: doc.identifiers.path,
    },

    info: {
      title: doc.info.title,
      releaseYear: new Date(doc.info.releaseDate).getFullYear(),
    },

    assets: {
      cover: {
        url: `${PUBLIC_URLS.MEDIAS.ASSETS}/${doc.identifiers.slug}/cover.jpg`,
        alt: `Capa da mídia ${doc.info.title}`,
      },
    },

    progress: doc.progress,
  };
}
