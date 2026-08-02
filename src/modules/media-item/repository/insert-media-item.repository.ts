import { connectToDatabase } from "@/lib/mongoose";
import { MediaItem, MediaItemDocument } from "../types";
import { MediaItemModel } from "../model";

export async function insertMediaItem(
  newMediaItem: MediaItem,
): Promise<MediaItem> {
  await connectToDatabase();

  const document: MediaItemDocument = await MediaItemModel.create(newMediaItem);

  return {
    title: document.title,
    translatedTitle: document.translatedTitle,

    slug: document.slug,
    mediaType: document.mediaType,

    releaseDate: document.releaseDate,

    synopsis: document.synopsis,

    cover: document.cover,
    trailer: document.trailer,

    themes: document.themes,
    franchises: document.franchises,

    acquired: document.acquired,
    complete: document.complete,

    characters: document.characters,
  };
}
