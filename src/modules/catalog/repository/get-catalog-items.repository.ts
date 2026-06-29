import type { CatalogQuery } from "../types";
import { buildMongoFilters } from "../helpers";
import { MediaItemModel } from "@/modules/media-item";

type Params = {
  mediaType: string;
} & CatalogQuery;

export async function getCatalogItems({
  mediaType,
  q,
  sort,
  page,
  filters,
}: Params) {
  return MediaItemModel.find({
    mediaType,
    ...buildMongoFilters({ filters }),
  });
}
