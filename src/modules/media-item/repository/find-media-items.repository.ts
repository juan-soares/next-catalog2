import { connectToDatabase } from "@/lib/mongoose";
import { MediaItem, MediaItemDocument } from "../types";
import { mapMediaItemDocToMediaItem } from "../mappers";
import { MediaItemModel } from "../model";

export async function findMediaItems(): Promise<MediaItem[]> {
  await connectToDatabase();

  const mediaItems: MediaItemDocument[] = await MediaItemModel.find({});

  return mediaItems.map(mapMediaItemDocToMediaItem);
}
