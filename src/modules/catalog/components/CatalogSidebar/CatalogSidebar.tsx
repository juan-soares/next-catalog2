/**
 * Sidebar principal do catálogo.
 *
 * Distribui o estado atual do catálogo
 * e prepara espaço para filtros dinâmicos
 * baseados no MediaType.
 */

import styles from "./CatalogSidebar.module.css";

import type { CatalogQuery } from "@/modules/catalog";
import type { MediaTypeDefinition } from "@/modules/media-types";

import { CatalogSearchbar } from "../CatalogSearchbar";
import { CatalogSortbar } from "../CatalogSortbar";

type Props = {
  query: CatalogQuery;
  mediaType: MediaTypeDefinition;
};

export default function CatalogSidebar({ query, mediaType }: Props) {
  return (
    <aside className={styles.CatalogSidebar}>
      <CatalogSearchbar query={query.q} />
      <CatalogSortbar query={query} />
    </aside>
  );
}
