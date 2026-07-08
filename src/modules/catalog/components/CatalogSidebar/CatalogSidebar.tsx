import { FilterGroup } from "@/modules/media-type";
import styles from "./CatalogSidebar.module.css";

import { CatalogFilters, CatalogQuery, CatalogSearch } from "@/modules/catalog";

export type Props = {
  query: CatalogQuery;
  filters: FilterGroup[];
};

export function CatalogSidebar({ query, filters }: Props) {
  return (
    <aside className={styles.CatalogSidebar}>
      <CatalogSearch query={query} />
      <CatalogFilters filters={filters} />
    </aside>
  );
}
