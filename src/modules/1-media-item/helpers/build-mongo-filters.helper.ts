import type { CatalogQuery } from "@/modules/1-catalog";
import type { MediaTypeKey } from "@/modules/1-media-type";

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
