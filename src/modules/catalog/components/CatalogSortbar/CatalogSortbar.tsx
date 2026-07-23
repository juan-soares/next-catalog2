/**
 * O que este arquivo faz
 * ----------------------
 * Renderiza os controles de ordenação
 * do catálogo.
 *
 * O que este arquivo NÃO faz
 * --------------------------
 * - Não executa ordenação.
 * - Não acessa banco.
 * - Não conhece MediaTypes específicos.
 * - Não controla estado React.
 */

import Link from "next/link";

import { SORT_OPTIONS } from "../../consts";
import { CatalogQuery } from "../../types";
import { convertCatalogQueryToURLQuery } from "../../helpers";

type Props = {
  pathname: string;
  query: CatalogQuery;
};

export function CatalogSortbar({ pathname, query }: Props) {
  return (
    <nav>
      {SORT_OPTIONS.map((option) => (
        <Link
          key={option.value}
          href={`${pathname}?${convertCatalogQueryToURLQuery(query, { sort: option.value })}`}
        >
          {option.label}
        </Link>
      ))}
    </nav>
  );
}
