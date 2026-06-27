/**
 * Barra de ordenação do catálogo.
 *
 * Responsável por alterar o parâmetro de ordenação
 * a partir do estado atual do catálogo recebido via URL.
 *
 * O componente preserva os parâmetros existentes através
 * do CatalogQuery e delega a construção da URL ao helper
 * central do domínio de catálogo.
 *
 * Não possui estado próprio.
 * Não executa consultas.
 */

import Link from "next/link";

import type { CatalogQuery } from "@/modules/catalog";
import { buildCatalogUrl } from "@/modules/catalog";

import styles from "./CatalogSortbar.module.css";

type Props = {
  query: CatalogQuery;
};

export default function CatalogSortbar({ query }: Props) {
  return (
    <nav className={styles.CatalogSortBar} aria-label="Ordenação do catálogo">
      <Link
        href={buildCatalogUrl({
          ...query,
          sort: "alph",
        })}
        data-active={query.sort === "alph"}
      >
        A–Z
      </Link>

      <Link
        href={buildCatalogUrl({
          ...query,
          sort: "updated",
        })}
        data-active={query.sort === "updated"}
      >
        Recentes
      </Link>

      <Link
        href={buildCatalogUrl({
          ...query,
          sort: "released",
        })}
        data-active={query.sort === "released"}
      >
        Lançamentos
      </Link>
    </nav>
  );
}
