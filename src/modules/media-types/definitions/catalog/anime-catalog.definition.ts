import {
  type CatalogDefinition,
  type CatalogQuery,
  type CatalogResult,
  languageFilter,
} from "@/modules/catalog";

// placeholder de item (ainda não criamos MediaItem real)
type AnimeItem = {
  id: string;
  title: string;
};

async function getAnimeItems(
  query: CatalogQuery,
): Promise<CatalogResult<AnimeItem>> {
  return {
    items: [],
    total: 0,
    page: query.page ?? 1,
    pageSize: 20,
  };
}

export const animeCatalogDefinition: CatalogDefinition<AnimeItem> = {
  defaultSort: "updated",

  allowedSorts: ["updated", "released", "alph"],

  filters: [languageFilter],

  async getItems(query) {
    return getAnimeItems(query);
  },
};
