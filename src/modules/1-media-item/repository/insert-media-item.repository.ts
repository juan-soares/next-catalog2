import { connectToDatabase } from "@/lib/mongoose";
import { MediaItem } from "../types";
import { MediaItemModel } from "../model";

export async function insertMediaItem(
  newMediaItem: MediaItem,
): Promise<MediaItem> {
  await connectToDatabase();

  const languageIds = newMediaItem.languageIds.map((id) => id);
  const themeIds = newMediaItem.themeIds.map((id) => id);

  await MediaItemModel.create({
    ...newMediaItem,
    languageIds,
    themeIds,
  });

  return newMediaItem;
}
