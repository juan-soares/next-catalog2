import { CatalogItem } from "../catalog/types";

export type MediaTypeCatalog = {
  getItems(query: string): Promise<CatalogItem[]>;
  getFilters(query: string): Promise<[]>;
};
