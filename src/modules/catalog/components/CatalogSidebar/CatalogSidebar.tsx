/**
 * Sidebar principal do catálogo.
 *
 * Distribui o estado atual do catálogo
 * e prepara espaço para filtros dinâmicos
 * baseados no MediaType.
 */

import styles from "./CatalogSidebar.module.css";

import {
  CatalogFilters,
  getAllowedFilters,
  CatalogSearchbar,
  CatalogSortbar,
  type CatalogQuery,
} from "@/modules/catalog";
import type { MediaTypeDefinition } from "@/modules/media-types";

type Props = {
  query: CatalogQuery;
  mediaType: MediaTypeDefinition;
};

export default function CatalogSidebar({ query, mediaType }: Props) {
  const filters = getAllowedFilters(mediaType.type);

  return (
    <aside className={styles.CatalogSidebar}>
      <CatalogFilters query={query} filters={filters} />
      <CatalogSearchbar query={query.q} />
      <CatalogSortbar query={query} />
    </aside>
  );
}
