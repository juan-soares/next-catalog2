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
      {filters.map((filter) => {
        const currentValues = query.filters?.[filter.key] ?? [];

        return (
          <div key={filter.key}>
            <h4>{filter.label}</h4>

            {filter.options?.map((option) => {
              const isActive = currentValues.includes(option.value);

              const nextValues = isActive
                ? currentValues.filter((v) => v !== option.value)
                : [...currentValues, option.value];

              return (
                <Link
                  key={option.value}
                  href={buildCatalogUrl({
                    ...query,
                    filters: {
                      ...query.filters,
                      [filter.key]: nextValues,
                    },
                  })}
                >
                  {isActive ? "✓ " : ""}
                  {option.label}
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
