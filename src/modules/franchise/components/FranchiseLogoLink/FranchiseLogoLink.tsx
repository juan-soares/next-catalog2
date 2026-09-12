import Image from "next/image";
import Link from "next/link";
import type { FranchiseLogoLink } from "@/modules/franchise/types";
import { FRANCHISES_LOGO_PATH } from "@/shared/consts";

export function FranchiseLogoLink({
  id,
  href,
  logoPath,
  title,
}: FranchiseLogoLink) {
  console.log(logoPath);
  return (
    <Link key={id} href={href}>
      <Image
        src={FRANCHISES_LOGO_PATH + logoPath}
        alt={`Logotipo da franquia ${title}.`}
        width={60}
        height={60}
      />

      <p>{title}</p>
    </Link>
  );
}
