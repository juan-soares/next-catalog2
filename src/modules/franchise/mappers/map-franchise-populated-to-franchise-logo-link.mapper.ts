import { CATALOG_FRANCHISES_PATH, FRANCHISES_LOGO_PATH } from "@/shared/consts";
import type {
  FranchiseLogoLink,
  FranchiseDocPopulated,
} from "@/modules/franchise/types";

export function mapFranchisePopulatedToFranchiseLogoLink(
  franchise: FranchiseDocPopulated,
): FranchiseLogoLink {
  return {
    id: franchise.id,
    href: CATALOG_FRANCHISES_PATH + franchise.id,
    logoPath: "/assets/franchises/" + franchise.logoId.fileName,
    title: franchise.title,
  };
}
