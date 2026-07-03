/**
 * CatalogSidebar
 *
 * Responsável por renderizar filtros baseados em FilterDefinition.
 *
 * Regras:
 * - Não conhece MediaType diretamente
 * - Não contém regra de negócio
 * - Apenas renderiza e atualiza URL
 */

"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { FilterDefinition } from "@/modules/catalog/types/filter-definition.type";
import { FilterOptions } from "../CatalogFilterOption";

type Props = {
  filters?: FilterDefinition[];
};

export function CatalogSidebar({ filters = [] }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    const current = params.getAll(key);

    const exists = current.includes(value);

    params.delete(key);

    const next = exists
      ? current.filter((v) => v !== value)
      : [...current, value];

    next.forEach((v) => params.append(key, v));

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <aside>
      {(filters ?? []).filter(Boolean).map((filter) => (
        <div key={filter.key}>
          <h4>{filter.label}</h4>

          <FilterOptions filter={filter} onSelect={updateFilter} />
        </div>
      ))}
    </aside>
  );
}
