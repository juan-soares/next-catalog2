import { CatalogFilter } from "./catalog-filter.view.type";
import { CatalogListItem } from "./catalog-list-item.view.type";

export type MediaTypeCatalogInfo = {
  title: string;
  filters: CatalogFilter[];
  newPath: string;
  results: CatalogListItem[];
};
