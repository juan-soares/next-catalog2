import { CATALOG_FRANCHISES_PATH, FRANCHISES_LOGO_PATH } from "@/shared/consts";
import type {
  FranchiseDetails,
  FranchiseLogoLink,
} from "@/modules/franchise/types";

export function mapFranchiseDetailsToFranchiseLogoLink(
  details: FranchiseDetails,
): FranchiseLogoLink {
  return {
    id: details.id,
    href: `${CATALOG_FRANCHISES_PATH}q?${details.id}`,
    logoPath: FRANCHISES_LOGO_PATH + details.logo.fileName,
    title: details.title,
  };
}
