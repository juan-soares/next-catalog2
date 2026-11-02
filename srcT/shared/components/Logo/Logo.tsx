import Image from "next/image";
import Link from "next/link";
import { LOGO } from "@/shared/consts";

export function Logo() {
  return (
    <Link href="/">
      <Image
        src={LOGO.PATH}
        alt={LOGO.ALT}
        width={LOGO.WIDTH}
        height={LOGO.HEIGHT}
      />
    </Link>
  );
}
