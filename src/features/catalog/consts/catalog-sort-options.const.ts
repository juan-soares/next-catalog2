import { CATALOG_SORT_TYPE } from "./catalog-sort-type.const";

export const CATALOG_SORT_OPTIONS = [
  { label: "A-Z", sortType: CATALOG_SORT_TYPE.ALPH },
  { label: "Recente", sortType: CATALOG_SORT_TYPE.RECENT },
  { label: "Lançamento", sortType: CATALOG_SORT_TYPE.RELEASE },
] as const;
