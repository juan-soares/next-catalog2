/**
 * O que este arquivo faz:
 * - Renderiza o campo de busca do catálogo.
 * - Envia alterações de busca através da URL.
 * - Preserva parâmetros de catálogo que continuam válidos.
 *
 * O que este arquivo NÃO faz:
 * - Não executa busca no banco.
 * - Não mantém estado interno de catálogo.
 * - Não interpreta regras de paginação.
 * - Não constrói URLs manualmente.
 */

import styles from "./CatalogSearch.module.css";
import type { CatalogQuery } from "@/modules/catalog";

type Props = {
  query: CatalogQuery;
};

export function CatalogSearch({ query }: Props) {
  return (
    <form method="GET" className={styles.catalogSearch}>
      <input
        type="search"
        placeholder="Pesquisar..."
        name="q"
        defaultValue={query.q}
      />

      {query.sort && <input type="hidden" name="sort" value={query.sort} />}

      <button type="submit">OK</button>
    </form>
  );
}
