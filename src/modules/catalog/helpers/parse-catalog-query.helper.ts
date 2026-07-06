/**
 * O que este arquivo faz:
 * - Converte searchParams do Next.js em CatalogQuery.
 * - Atua como camada de adaptação entre framework e domínio.
 *
 * O que este arquivo NÃO faz:
 * - Não conhece MediaType.
 * - Não acessa banco de dados.
 * - Não contém regras de negócio de catálogo.
 * - Não interpreta comportamento de filtros.
 */

import { CatalogQuery } from "../types";

export function parseCatalogQuery(
  searchParams: Record<string, string | string[] | undefined>,
): CatalogQuery {
  return {};
}
