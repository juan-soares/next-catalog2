import Image from "next/image";
import Link from "next/link";
import { CATALOG_FRANCHISES_PATH } from "@/shared/consts";

type Props = {
  id: string;
  label: string;
  logoURL: string;
};

export function FranchiseLogoLink({ id, label, logoURL }: Props) {
  return (
    <Link href={CATALOG_FRANCHISES_PATH + `/${id}`}>
      <Image
        src={logoURL}
        alt={`Logotipo da franquia ${label}.`}
        width={60}
        height={60}
      />

      <p>{label}</p>
    </Link>
  );
}
