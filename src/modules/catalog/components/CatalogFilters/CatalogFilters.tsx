import type { CatalogQuery } from "../../types";
import type { CatalogFilterDefinition } from "../../types/catalog-filter-definition.type";

import { buildCatalogUrl } from "../../helpers/build-catalog-url.helper";

import Link from "next/link";

type Props = {
  query: CatalogQuery;
  filters: CatalogFilterDefinition[];
};

export default function CatalogFilters({ query, filters }: Props) {
  return (
    <div>
      {filters.map((filter) => (
        <div key={filter.key}>
          <h4>{filter.label}</h4>

          {/* MOCK simples inicial */}
          <Link
            href={buildCatalogUrl({
              ...query,
              filters: {
                ...query.filters,
                [filter.key]: ["example"],
              },
            })}
          >
            Exemplo
          </Link>
        </div>
      ))}
    </div>
  );
}
