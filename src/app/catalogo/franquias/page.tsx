import { FRANCHISES_CATALOG_PATH } from "@/consts/paths";
import { Catalog } from "@/features/catalog";

export default async function FranchisesCatalogPage() {
  const page = {
    title: "Franquias",
    path: FRANCHISES_CATALOG_PATH,
  };

  return <Catalog info={page} />;
}
