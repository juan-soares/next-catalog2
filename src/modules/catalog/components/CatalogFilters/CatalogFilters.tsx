import Link from "next/link";
import type { CatalogQuery } from "@/modules/catalog";
import { buildCatalogUrl, toggleCatalogFilter } from "@/modules/catalog";
import type { FilterGroup } from "@/modules/media-type";
import styles from "./CatalogFilters.module.css";

type Props = {
  slug: string;
  filters: FilterGroup[];
  query: CatalogQuery;
};

export function CatalogFilters({ slug, filters, query }: Props) {
  return (
    <div className={styles.catalogFilters}>
      {filters.map((group) => (
        <section key={group.key}>
          <header>
            <h3>{group.label}</h3>

            <Link href={`/admin/atributos/${group.slug}/novo`}>+</Link>
          </header>

          <ul>
            {group.options.map((option) => {
              const href = buildCatalogUrl(
                query,
                toggleCatalogFilter({
                  query,
                  key: group.key,
                  value: option.value,
                }),
              );

              return (
                <li key={option.value}>
                  <Link href={`?${href}`}>{option.label}</Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      <div>
        <Link href={`/${slug}`}>Limpar Filtros</Link>
      </div>
    </div>
  );
}
