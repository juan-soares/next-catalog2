import { connectToDatabase } from "@/lib/mongoose";
import { MediaItem, MediaItemDocument } from "../types";
import { mapMediaItemDocToMediaItem } from "../mappers";
import { MediaItemModel } from "../model";

type SearchOptions = {
  query: string;
  limit: number;
  orderBy: "title" | "createdAt" | "updatedAt";
  order: "asc" | "desc";
};

export async function findMediaItemsByTitleOrTranslatedTitle({
  query,
  limit,
  orderBy,
  order,
}: SearchOptions): Promise<MediaItem[]> {
  await connectToDatabase();

  const mediaItems: MediaItemDocument[] = await MediaItemModel.find({
    $or: [
      { title: { $regex: query, $options: "i" } },
      { translatedTitle: { $regex: query, $options: "i" } },
    ],
  })
    .sort({
      [orderBy]: order === "asc" ? 1 : -1,
    })
    .limit(limit);

  return mediaItems.map(mapMediaItemDocToMediaItem);
}
