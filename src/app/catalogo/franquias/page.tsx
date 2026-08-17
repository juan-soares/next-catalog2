import { FRANCHISES_CATALOG_PATH } from "@/consts/paths";
import { Catalog } from "@/features/catalog";
import { mapFranchiseToCatalogCardItem } from "@/features/catalog/mappers";

export default async function FranchisesCatalogPage() {
  const results = [
    { id: "123", title: "Marvel", logo: "/marvel-logo.png", slug: "marvel" },
  ];
  const catalogCards = results.map(mapFranchiseToCatalogCardItem);

  return (
    <Catalog
      title="Franquias"
      path={FRANCHISES_CATALOG_PATH}
      catalogCards={catalogCards}
    />
  );
}
