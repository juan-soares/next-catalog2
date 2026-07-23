import { CatalogFilter } from "@/modules/catalog";
import { animeFilters } from "../const";

export async function getAnimeFilters(): Promise<CatalogFilter[]> {
  const filters = (await Promise.all(animeFilters)).map(
    async ({ label, key }) => {
      const values = await getAttributeByAttributeType(key);

      return {
        label,
        key,
        values,
      };
    },
  );

  return filters;
}
