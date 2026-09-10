import Image from "next/image";
import Link from "next/link";
import { PlusCircleIcon } from "lucide-react";
import { CATALOG_FRANCHISES_NEW_PATH } from "@/shared/consts";
import { isAdminUser } from "@/modules/auth";
import { getFranchiseMarqueeLinks } from "@/modules/franchise/services";

export async function FranchiseMarquee() {
  const isAdmin = await isAdminUser();
  const franchiseLinks = await getFranchiseMarqueeLinks();

  return (
    <nav>
      {isAdmin && (
        <Link href={CATALOG_FRANCHISES_NEW_PATH}>
          <PlusCircleIcon />
        </Link>
      )}

      {franchiseLinks.map(({ id, href, logoPath, title }) => (
        <Link key={id} href={href}>
          <Image
            src={logoPath}
            alt={`Logotipo da franquia ${title}.`}
            width={60}
            height={60}
          />

          <p>{title}</p>
        </Link>
      ))}
    </nav>
  );
}
