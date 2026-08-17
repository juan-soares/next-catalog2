import { Franchise } from "@/modules/franchise";
import { CatalogCardItem } from "../components/types";
import { FRANCHISES_CATALOG_PATH } from "@/consts/paths";

export function mapFranchiseToCatalogCardItem(
  franchise: Franchise,
): CatalogCardItem {
  return {
    id: franchise.id,
    cover: franchise.logo,
    title: franchise.title,
    href: FRANCHISES_CATALOG_PATH + franchise.slug,
  };
}
