export type CatalogFilterOption = {
  value: string;
  label: string;
};

export type CatalogFilter = {
  label: string;
  newPath:string;
  fieldName: string;
  options: CatalogFilterOption[];
};
