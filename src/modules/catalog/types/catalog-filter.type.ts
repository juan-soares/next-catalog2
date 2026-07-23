import { CatalogFilterOption } from "./catalog-filter-option.type";

export type CatalogFilter = {
  label: string;
  key: string;
  values: CatalogFilterOption[];
};
