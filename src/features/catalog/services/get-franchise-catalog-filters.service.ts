import { CatalogFilter } from "../types";
import { mapFranchiseToCatalogFilterOption } from "../mappers";

import { FRANCHISES_CATALOG_NEW_PATH } from "@/consts/paths";
import { getFranchises } from "@/modules/franchise";

export async function getFranchiseCatalogFilters(): Promise<CatalogFilter> {
  const franchises = await getFranchises();

  return {
    label: "Franquias",
    fieldName: "franchiseIds",
    path: FRANCHISES_CATALOG_NEW_PATH,
    options: franchises.map(mapFranchiseToCatalogFilterOption),
  };
}
