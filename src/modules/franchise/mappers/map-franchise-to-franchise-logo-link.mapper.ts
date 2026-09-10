import { CATALOG_FRANCHISE_PATH, FRANCHISES_LOGO_PATH } from "@/shared/consts";
import type { Franchise, FranchiseLogoLink } from "@/modules/franchise/types";

export function mapFranchiseToFranchiseLogoLink(
  franchise: Franchise,
): FranchiseLogoLink {
  return {
    id: franchise.id,
    href: CATALOG_FRANCHISE_PATH + franchise.id,
    logoPath: FRANCHISES_LOGO_PATH + franchise.logo,
    title: franchise.title,
  };
}
