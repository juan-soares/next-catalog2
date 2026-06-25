import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/icons/logo.png"
        alt="Logotipo."
        width={40}
        height={40}
      />
    </Link>
  );
}
