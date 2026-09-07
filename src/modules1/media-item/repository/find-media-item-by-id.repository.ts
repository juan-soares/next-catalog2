import { connectToDatabase } from "@/lib/mongoose";
import { MediaItem, MediaItemDocument } from "../types";
import { MediaItemModel } from "../model";
import { mapMediaItemDocToMediaItem } from "../mappers";
import { Types } from "mongoose";

export async function findMediaItemById(id: string): Promise<MediaItem | null> {
  if (!Types.ObjectId.isValid(id)) {
    return null;
  }

  await connectToDatabase();

  const mediaItemDoc: MediaItemDocument | null =
    await MediaItemModel.findById(id).populate("themeIds");

  if (!mediaItemDoc) return null;

  return mapMediaItemDocToMediaItem(mediaItemDoc);
}
