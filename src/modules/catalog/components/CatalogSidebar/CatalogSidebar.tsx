/**
 * Sidebar principal do catálogo.
 *
 * Distribui o estado atual do catálogo
 * para os componentes de interação.
 *
 * Os componentes recebem a query atual
 * para preservar o estado da URL.
 */

import styles from "./CatalogSidebar.module.css";

import type { CatalogQuery } from "@/modules/catalog";

import { CatalogSearchbar } from "../CatalogSearchbar";
import { CatalogSortbar } from "../CatalogSortbar";

type Props = {
  query: CatalogQuery;
};

export default function CatalogSidebar({ query }: Props) {
  return (
    <aside className={styles.CatalogSidebar}>
      <CatalogSearchbar query={query.q} />
      <CatalogSortbar query={query} />
    </aside>
  );
}
