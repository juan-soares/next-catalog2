import { connectToDatabase } from "@/lib/mongoose";
import { MediaItem, MediaItemDocument } from "../types";
import { MediaItemModel } from "../model";
import { mapMediaItemDocToMediaItem } from "../mappers";

export async function findRecentlyUpdatedMediaItems(
  limit: number,
): Promise<MediaItem[]> {
  await connectToDatabase();

  const mediaItemDocs: MediaItemDocument[] = await MediaItemModel.find()
    .sort({ updatedAt: -1 })
    .limit(limit);

  return mediaItemDocs.map(mapMediaItemDocToMediaItem);
}
