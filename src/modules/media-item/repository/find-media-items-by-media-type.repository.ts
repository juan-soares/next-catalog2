import { MediaTypeKey } from "@/modules/media-type";
import { MediaItemModel } from "../model";
import { MediaItem } from "../types";
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

  const documents = await MediaItemModel.find(filter).sort(sort).lean();

  return documents.map((document) => ({
    id: document._id.toString(),
    mediaType: document.mediaType,
    slug: document.slug,
    title: document.title,
    translatedTitle: document.translatedTitle,
    releaseDate: document.releaseDate,
    cover: document.cover,
    attributes: Object.fromEntries(document.attributes),
    createdAt: document.createdAt,
    updatedAt: document.updatedAt,
  }));
}
