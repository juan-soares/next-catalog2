import { CatalogList, CatalogQuery } from "@/modules/catalog";
import { listAnimeCatalogResults } from "../../services";

type Props = {
  query: CatalogQuery;
};

export async function AnimesCatalogList({ query }: Props) {
  const results = await listAnimeCatalogResults(query);

  return <CatalogList results={results} />;
}
