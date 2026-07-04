import styles from "./CatalogSidebar.module.css";

import { CatalogFilters } from "../CatalogFilters";
import { CatalogSearch } from "../CatalogSearch";

export function CatalogSidebar() {
  return (
    <aside className={styles.CatalogSidebar}>
      <CatalogSearch />
      <CatalogFilters />
    </aside>
  );
}
