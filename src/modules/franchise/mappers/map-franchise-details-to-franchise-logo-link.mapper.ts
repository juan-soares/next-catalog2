import { CATALOG_FRANCHISES_PATH } from "@/shared/consts";
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
    logoPath: details.logo.path,
    title: details.title,
  };
}
