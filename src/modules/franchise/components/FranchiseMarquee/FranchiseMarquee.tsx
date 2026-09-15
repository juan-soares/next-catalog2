import Link from "next/link";
import { PlusCircleIcon, Search } from "lucide-react";
import {
  CATALOG_FRANCHISES_NEW_PATH,
  CATALOG_FRANCHISES_PATH,
} from "@/shared/consts";
import { isAdminUser } from "@/modules/auth";
import { getChildlessFranchises } from "@/modules/franchise/services";
import { FranchiseLogoLink } from "@/modules/franchise/components";

export async function FranchiseMarquee() {
  const isAdmin = await isAdminUser();
  const franchisesDetails = await getChildlessFranchises();

  return (
    <nav>
      <div>
        <Link href={CATALOG_FRANCHISES_PATH}>
          <Search />
        </Link>
        {isAdmin && (
          <Link href={CATALOG_FRANCHISES_NEW_PATH}>
            <PlusCircleIcon />
          </Link>
        )}
      </div>

      {franchisesDetails.map(({ id, title, logo: { fileName } }) => (
        <FranchiseLogoLink key={id} id={id} label={title} logo={fileName} />
      ))}
    </nav>
  );
}
