import Image from "next/image";
import Link from "next/link";
import { PUBLIC_URLS } from "@/shared/consts";
import type { FranchiseView } from "@/modules/franchise/types";

type Props = Pick<FranchiseView, "logo" | "slug"> & {
  width: number;
  height: number;
};

export function FranchiseLogo({ logo, slug, width, height }: Props) {
  return (
    <Link href={`${PUBLIC_URLS.FRANCHISES.LIST}/${slug}`}>
      <Image src={logo.url} alt={logo.alt} width={width} height={height} />
    </Link>
  );
}
