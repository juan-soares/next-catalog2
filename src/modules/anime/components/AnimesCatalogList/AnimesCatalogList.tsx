import { CatalogList } from "@/modules/catalog";
import { listAnimeCatalogResults } from "../../services";

export async function AnimesCatalogList() {
  const results = await listAnimeCatalogResults();

  return <CatalogList results={results} />;
}
