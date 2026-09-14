import Image from "next/image";
import Link from "next/link";
import { CATALOG_FRANCHISES_PATH, FRANCHISES_LOGO_PATH } from "@/shared/consts";

type Props = {
  id: string;
  label: string;
  logo: string;
};

export function FranchiseLogoLink({ id, label, logo }: Props) {
  return (
    <Link href={CATALOG_FRANCHISES_PATH + `/${id}`}>
      <Image
        src={FRANCHISES_LOGO_PATH + logo}
        alt={`Logotipo da franquia ${label}.`}
        width={60}
        height={60}
      />

      <p>{label}</p>
    </Link>
  );
}
