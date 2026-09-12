import Link from "next/link";
import { PlusCircleIcon } from "lucide-react";
import { CATALOG_FRANCHISES_NEW_PATH } from "@/shared/consts";
import { isAdminUser } from "@/modules/auth";
import { getParentFranchiseLogoLinks } from "@/modules/franchise/services";
import { FranchiseLogoLink } from "@/modules/franchise/components";

export async function FranchiseMarquee() {
  const isAdmin = await isAdminUser();
  const franchiseLinks = await getParentFranchiseLogoLinks();

  return (
    <nav>
      {isAdmin && (
        <Link href={CATALOG_FRANCHISES_NEW_PATH}>
          <PlusCircleIcon />
        </Link>
      )}

      {franchiseLinks.map((logoLink) => (
        <FranchiseLogoLink key={logoLink.id} {...logoLink} />
      ))}
    </nav>
  );
}
