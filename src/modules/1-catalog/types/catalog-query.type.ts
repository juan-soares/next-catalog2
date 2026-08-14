import { CatalogSortOptions } from "./catalog-sort-options.type";

export type CatalogQuery = {
  q?: string;
  sort: CatalogSortOptions;
};
