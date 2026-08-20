import { connectToDatabase } from "@/lib/mongoose";
import { MediaItem, MediaItemDocument } from "../types";
import { mapMediaItemDocToMediaItem } from "../mappers";
import { MediaItemModel } from "../model";
import { MediaTypeKey } from "@/modules/media-type";

type SearchParams = {
  type?: MediaTypeKey;
};

export async function findMediaItems(
  searchParams: SearchParams = {},
): Promise<MediaItem[]> {
  await connectToDatabase();

  const mediaItems: MediaItemDocument[] =
    await MediaItemModel.find(searchParams);

  return mediaItems.map(mapMediaItemDocToMediaItem);
}
