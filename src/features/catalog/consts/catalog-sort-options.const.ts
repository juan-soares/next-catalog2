import { CATALOG_SORT } from "./catalog-sort.const";

export const CATALOG_SORT_OPTIONS = [
  {
    label: "A-Z",
    value: CATALOG_SORT.TITLE,
  },
  {
    label: "Recente",
    value: CATALOG_SORT.RECENT,
  },
  {
    label: "Lançamento",
    value: CATALOG_SORT.RELEASE,
  },
] as const;
