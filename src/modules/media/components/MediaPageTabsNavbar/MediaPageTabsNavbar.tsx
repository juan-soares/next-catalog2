import { MEDIA_TABS_LIST } from "@/modules/media/consts";
import Link from "next/link";

export function MediaPageTabsNavbar() {
  return (
    <nav>
      {MEDIA_TABS_LIST.map(({ code, label, slug }) => (
        <Link key={code} href={`?tab=${slug}`}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
