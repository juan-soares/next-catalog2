import { CatalogQuery } from "../types";

export function convertCatalogQueryToURLQuery(
  query: CatalogQuery,
  overrides: Partial<CatalogQuery>,
) {
  const newQuery = {
    ...query,
    ...overrides,
  };

  const params = new URLSearchParams();

  Object.entries(newQuery).forEach(([key, value]) => {
    if (value !== undefined) {
      params.set(key, String(value));
    }
  });

  return params.toString();
}
