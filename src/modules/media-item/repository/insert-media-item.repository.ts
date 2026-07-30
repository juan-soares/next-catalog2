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
    slug: document.slug,
    mediaType: document.mediaType,
    releaseDate: document.releaseDate,
    cover: document.cover,
  };
}
