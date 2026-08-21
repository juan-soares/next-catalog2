export type CatalogFilterOption = {
  value: string;
  label: string;
};

export type CatalogFilter = {
  label: string;
  fieldName: string;
  options: CatalogFilterOption[];
};
