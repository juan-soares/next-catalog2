import { FilterGroup } from "@/modules/media-type";
import styles from "./CatalogSidebar.module.css";

import { CatalogFilters, CatalogQuery, CatalogSearch } from "@/modules/catalog";

export type Props = {
  slug:string;
  query: CatalogQuery;
  filters: FilterGroup[];
};

export function CatalogSidebar({ slug, query, filters }: Props) {
  return (
    <aside className={styles.CatalogSidebar}>
      <CatalogSearch query={query} />
      <CatalogFilters slug={slug} filters={filters} query={query} />
    </aside>
  );
}
