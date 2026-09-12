import { CATALOG_FRANCHISES_PATH, FRANCHISES_LOGO_PATH } from "@/shared/consts";
import type {mapFranchisePopulatedToFranchiseLogoLink
  FranchiseLogoLink,
  FranchisePopulated,
} from "@/modules/franchise/types";

export function (
  franchise: FranchisePopulated,
): FranchiseLogoLink {
  return {
    id: franchise.id,
    href: CATALOG_FRANCHISES_PATH + franchise.id,
    logoPath: FRANCHISES_LOGO_PATH + franchise.logo.fileName,
    title: franchise.title,
  };
}
