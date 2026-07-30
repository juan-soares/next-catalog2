import { MediaTypeKey } from "@/modules/media-type";
import { MediaItemModel } from "../model";
import { connectToDatabase } from "@/lib/mongoose";
import { MediaItem, MediaItemDocument } from "../types";

export async function findMediaItemByTypeAndSlug(
  type: MediaTypeKey,
  slug: string,
): Promise<MediaItem> {
  await connectToDatabase();

  const document: MediaItemDocument = await MediaItemModel.findOne({
    type,
    slug,
  }).lean();

  return {
    slug: document.slug,
    title: document.title,
    translatedTitle: document.translatedTitle,
    mediaType: document.mediaType,
    releaseDate: document.releaseDate,
    cover: document.cover,
  };
}
