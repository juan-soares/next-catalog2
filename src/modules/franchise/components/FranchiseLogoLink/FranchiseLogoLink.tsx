import Image from "next/image";
import Link from "next/link";
import type { FranchiseLogoLink } from "@/modules/franchise/types";

export function FranchiseLogoLink({
  id,
  href,
  logoPath,
  title,
}: FranchiseLogoLink) {
  return (
    <Link key={id} href={href}>
      <Image
        src={logoPath}
        alt={`Logotipo da franquia ${title}.`}
        width={60}
        height={60}
      />

      <p>{title}</p>
    </Link>
  );
}
