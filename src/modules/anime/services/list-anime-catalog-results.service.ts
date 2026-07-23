import { CatalogListType, CatalogQuery } from "@/modules/catalog/types";
import { mapAnimetoCatalogListItem } from "../mappers";
import { getAnimes } from "./get-animes.service";

export async function listAnimeCatalogResults(
  query: CatalogQuery,
): Promise<CatalogListType> {
  const animes = await getAnimes(query);

  return animes.map(mapAnimetoCatalogListItem);
}
