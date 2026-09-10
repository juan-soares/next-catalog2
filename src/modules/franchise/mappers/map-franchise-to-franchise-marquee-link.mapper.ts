import { CATALOG_FRANCHISE_PATH, FRANCHISES_LOGO_PATH } from "@/shared/consts";
import type {
  Franchise,
  FranchiseMarqueeLink,
} from "@/modules/franchise/types";

export function mapFranchiseToFranchiseMarqueeLink(
  franchise: Franchise,
): FranchiseMarqueeLink {
  return {
    id: franchise.id,
    href: CATALOG_FRANCHISE_PATH + franchise.id,
    logoPath: FRANCHISES_LOGO_PATH + franchise.logo,
    title: franchise.title,
  };
}
