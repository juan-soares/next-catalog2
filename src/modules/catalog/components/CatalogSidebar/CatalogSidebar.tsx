import { FilterGroup } from "@/modules/media-type";
import styles from "./CatalogSidebar.module.css";

import { CatalogFilters, CatalogQuery, CatalogSearch } from "@/modules/catalog";
import Link from "next/link";

export type Props = {
  slug: string;
  query: CatalogQuery;
  filters: FilterGroup[];
};

export function CatalogSidebar({ slug, query, filters }: Props) {
  return (
    <aside className={styles.CatalogSidebar}>
      <div>
        <CatalogSearch query={query} />
        <Link href={`/admin/catalogo/${slug}/novo`}>+</Link>
      </div>
      <CatalogFilters slug={slug} filters={filters} query={query} />
    </aside>
  );
}
