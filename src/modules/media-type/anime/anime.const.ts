import type { CatalogSort } from "@/modules/catalog";

export const animeSortMap: Record<CatalogSort, Record<string, 1 | -1>> = {
  alph: {
    title: 1,
  },

  updated: {
    updatedAt: -1,
  },

  released: {
    releaseDate: -1,
  },
};
