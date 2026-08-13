import { getMediaTypeInfoByKey } from "@/modules/media-type";
import { MediaItem, MediaItemDocument } from "../types";

export function mapMediaItemDocToMediaItem(
  mediaItemDoc: MediaItemDocument,
): MediaItem {
  const { slug, label } = getMediaTypeInfoByKey(mediaItemDoc.mediaType);

  return {
    id: mediaItemDoc._id.toString(),
    slug: mediaItemDoc.slug,
    mediaType: { slug, label },
    title: mediaItemDoc.title,
    releaseDate: mediaItemDoc.releaseDate,
    cover: mediaItemDoc.cover,
  };
}
