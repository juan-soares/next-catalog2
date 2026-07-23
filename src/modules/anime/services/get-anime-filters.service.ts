import { CatalogFilter } from "@/modules/catalog";
import { animeFilters } from "../const";
import { getAttributesByType } from "@/modules/attribute";

export async function getAnimeFilters(): Promise<CatalogFilter[]> {
  const filters = await Promise.all(
    animeFilters.map(async ({ key, label }) => {
      const values = await getAttributesByType(key);

      return {
        key,
        label,
        values,
      };
    }),
  );

  return filters;
}
