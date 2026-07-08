import styles from "./CatalogSidebar.module.css";

import { CatalogFilters, CatalogQuery, CatalogSearch } from "@/modules/catalog";

export type Props = {
  query: CatalogQuery;
};

export function CatalogSidebar({ query }: Props) {
  return (
    <aside className={styles.CatalogSidebar}>
      <CatalogSearch query={query} />
      <CatalogFilters />
    </aside>
  );
}
