import { MediaTypeKey } from "@/modules/1-media-type";
import { MediaItemModel } from "../model";
import { connectToDatabase } from "@/lib/mongoose";
import { MediaItem, MediaItemDocument } from "../types";

export async function findMediaItemByTypeAndSlug(
  mediaType: MediaTypeKey,
  slug: string,
): Promise<MediaItem | null> {
  await connectToDatabase();

  const document: MediaItemDocument = await MediaItemModel.findOne({
    mediaType,
    slug,
  }).lean();

  if (!document) return null;

  return {
    slug: document.slug,
    title: document.title,
    translatedTitle: document.translatedTitle,
    mediaType: document.mediaType,
    releaseDate: document.releaseDate,
    cover: document.cover,

    trailer: document.trailer,
    themes: document.themes,
    synopsis: document.synopsis,
    acquired: document.acquired,
    complete: document.complete,
    characters: document.characters,
  };
}
