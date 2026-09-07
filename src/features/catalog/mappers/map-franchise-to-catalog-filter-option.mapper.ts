import { Franchise } from "@/modules1/franchise";
import { CatalogFilterOption } from "../types";

export function mapFranchiseToCatalogFilterOption(
  franchise: Franchise,
): CatalogFilterOption {
  return {
    value: franchise.id,
    label: franchise.title,
  };
}
