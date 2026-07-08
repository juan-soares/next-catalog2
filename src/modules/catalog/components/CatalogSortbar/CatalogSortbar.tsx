/**
 * O que este arquivo faz:
 * - Renderiza as opções de ordenação do catálogo.
 * - Exibe as alternativas de ordenação disponíveis.
 *
 * O que este arquivo NÃO faz:
 * - Não busca dados.
 * - Não interpreta URL.
 * - Não define regras de catálogo.
 * - Não monta regras de negócio.
 */

import Link from "next/link";
import styles from "./CatalogSortbar.module.css";
import { SORT_OPTIONS } from "../../consts";
import { CatalogQuery } from "../../types";
import { buildCatalogUrl } from "../../helpers";

type Props = {
  query: CatalogQuery;
};

export function CatalogSortbar({ query }: Props) {
  return (
    <nav className={styles.catalogSortbar}>
      {SORT_OPTIONS.map(({ value, label }) => (
        <Link key={value} href={`?${buildCatalogUrl(query, { sort: value })}`}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
