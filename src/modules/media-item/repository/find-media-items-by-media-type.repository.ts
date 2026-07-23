import { MediaTypeKey } from "@/modules/media-type";
import { MediaItemModel } from "../model";
import { MediaItem } from "../types";

export async function findMediaItemsByMediaType(
  mediaType: MediaTypeKey,
): Promise<MediaItem[]> {
  const documents = await MediaItemModel.find({
    mediaType,
  }).lean();

  return documents.map((document) => ({
    id: document._id.toString(),
    mediaType: document.mediaType,
    slug: document.slug,
    title: document.title,
    translatedTitle: document.translatedTitle,
    releaseDate: document.releaseDate,
    cover: document.cover,
    attributes: Object.fromEntries(document.attributes),
    createdAt: document.createdAt,
    updatedAt: document.updatedAt,
  }));
}
