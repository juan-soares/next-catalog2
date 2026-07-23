import { CatalogSortOptions } from "../types";

export const SORT_OPTIONS: {
  value: CatalogSortOptions;
  label: string;
}[] = [
  {
    value: "alph",
    label: "A-Z",
  },
  {
    value: "recent",
    label: "Recente",
  },
  {
    value: "release",
    label: "Lançamento",
  },
];
