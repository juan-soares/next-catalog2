import type { CatalogQuery } from "@/modules/catalog";
import type { MediaTypeKey } from "@/modules/media-type";

type Props = {
  mediaType: MediaTypeKey;
  query: CatalogQuery;
};

export function buildMongoFilters({ mediaType, query }: Props) {
  const filter: Record<string, unknown> = {
    mediaType,
  };

  if (query.q) {
    filter.$or = [
      {
        title: {
          $regex: query.q,
          $options: "i",
        },
      },
      {
        translatedTitle: {
          $regex: query.q,
          $options: "i",
        },
      },
    ];
  }

  return filter;
}
