import Link from "next/link";
import { PlusCircleIcon } from "lucide-react";
import { CATALOG_FRANCHISES_NEW_PATH } from "@/shared/consts";
import { isAdminUser } from "@/modules/auth";
import { getChildlessFranchises } from "@/modules/franchise/services";
import { FranchiseLogoLink } from "@/modules/franchise/components";

export async function FranchiseMarquee() {
  const isAdmin = await isAdminUser();
  const franchisesDetails = await getChildlessFranchises();

  return (
    <nav>
      {isAdmin && (
        <Link href={CATALOG_FRANCHISES_NEW_PATH}>
          <PlusCircleIcon />
        </Link>
      )}

      {franchisesDetails.map(({ id, title, logo: { fileName } }) => (
        <FranchiseLogoLink key={id} id={id} label={title} logo={fileName} />
      ))}
    </nav>
  );
}
