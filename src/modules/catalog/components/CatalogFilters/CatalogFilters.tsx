/**
 * O que este arquivo faz:
 * - Renderiza os grupos de filtros disponíveis no catálogo.
 * - Exibe opções preparadas pelo MediaType.
 * - Permite navegar para criação administrativa de um atributo.
 *
 * O que este arquivo NÃO faz:
 * - Não busca opções de filtros.
 * - Não conhece regras de MediaType.
 * - Não interpreta atributos.
 * - Não altera URL ou estado do catálogo.
 */

import Link from "next/link";
import type { FilterGroup } from "@/modules/media-type";
import styles from "./CatalogFilters.module.css";

type Props = {
  filters: FilterGroup[];
};

export function CatalogFilters({ filters }: Props) {
  return (
    <div className={styles.catalogFilters}>
      {filters.map((group) => (
        <section key={group.key}>
          <header>
            <h3>{group.label}</h3>

            <Link href={`/admin/atributos/${group.slug}/novo`}>+</Link>
          </header>

          <ul>
            {group.options.map((option) => (
              <li key={option.value}>{option.label}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
