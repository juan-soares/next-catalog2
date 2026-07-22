import { CatalogListType } from "@/modules/catalog/types";
import { mapAnimetoCatalogListItem } from "../mappers";
import { getAnimes } from "./get-animes.service";

export async function listAnimeCatalogResults(): Promise<CatalogListType> {
  const animes = await getAnimes();

  return animes.map(mapAnimetoCatalogListItem);
}
