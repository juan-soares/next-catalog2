import { getMediaTypeInfoByKey } from "@/modules/media-type";
import { MediaItem, MediaItemDocument } from "../types";

export function mapMediaItemDocToMediaItem(
  mediaItemDoc: MediaItemDocument,
): MediaItem {
  const { slug, label } = getMediaTypeInfoByKey(mediaItemDoc.mediaType);

  return {
    id: mediaItemDoc._id.toString(),

    slug: mediaItemDoc.slug,
    mediaType: { label, slug },

    title: mediaItemDoc.title,
    translatedTitle: mediaItemDoc.translatedTitle,
    releaseDate: mediaItemDoc.releaseDate,
    synopsis: mediaItemDoc.synopsis,

    cover: mediaItemDoc.cover,
    trailer: mediaItemDoc.trailer,

    themes: mediaItemDoc.themeIds,

    acquired: mediaItemDoc.acquired,
    completed: mediaItemDoc.completed,
  };
}
