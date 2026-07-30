import { MediaTypeKey } from "@/modules/media-type";
import { MediaItemModel } from "../model";
import { MediaItem, MediaItemDocument } from "../types";
import { connectToDatabase } from "@/lib/mongoose";
import { CatalogQuery } from "@/modules/catalog";
import { buildMongoFilters, buildMongoSort } from "../helpers";

export async function findMediaItemsByMediaType(
  mediaType: MediaTypeKey,
  query: CatalogQuery,
): Promise<MediaItem[]> {
  await connectToDatabase();

  const filter = buildMongoFilters({
    mediaType,
    query,
  });

  const sort = buildMongoSort(query.sort);

  const documents: MediaItemDocument[] = await MediaItemModel.find(filter)
    .sort(sort)
    .lean();

  return documents.map((document) => ({
    mediaType: document.mediaType,
    slug: document.slug,
    title: document.title,
    translatedTitle: document.translatedTitle,
    releaseDate: document.releaseDate,
    cover: document.cover,
  }));
}
