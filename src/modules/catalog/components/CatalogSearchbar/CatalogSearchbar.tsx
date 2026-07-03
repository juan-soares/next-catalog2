/**
 * Sidebar do catálogo.
 *
 * Responsabilidade
 * - Renderizar filtros dinamicamente com base no MediaTypeDefinition.
 * - Sincronizar estado com URL (via query string).
 *
 * Não deve
 * - Conter regras de filtro.
 * - Conhecer MediaTypes diretamente.
 * - Decidir quais filtros existem.
 */

"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { MediaTypeDefinition } from "@/modules/media-types";
import { FilterOptions } from "../CatalogFilterOption";

type Props = {
  definition: MediaTypeDefinition;
};

export function CatalogSidebar({ definition }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());

    const current = params.getAll(key);

    if (current.includes(value)) {
      params.delete(key);
      current.filter((v) => v !== value).forEach((v) => params.append(key, v));
    } else {
      params.append(key, value);
    }

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <aside>
      {definition.catalog.filters.map((filter) => (
        <div key={filter.key} style={{ marginBottom: 16 }}>
          <h4>{filter.label}</h4>

          <FilterOptions filter={filter} onSelect={updateFilter} />
        </div>
      ))}
    </aside>
  );
}
