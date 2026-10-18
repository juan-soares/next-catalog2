import Link from "next/link";
import { Menu } from "lucide-react";
import { ADMIN_PATH } from "@/shared/consts";
import { Logo } from "@/shared/components";
import { MediaTypesNavbar } from "@/modules/media-type/components";
import { GlobalSearch } from "@/modules/global-search/components";

export function Header() {
  return (
    <header>
      <div>
        <Logo />

        <GlobalSearch />

        <Link href={ADMIN_PATH}>
          <Menu />
        </Link>
      </div>

      <MediaTypesNavbar />
    </header>
  );
}
