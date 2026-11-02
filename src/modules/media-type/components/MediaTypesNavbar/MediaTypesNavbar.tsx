import Link from "next/link";
import { MEDIA_TYPE_LIST } from "@/modules/media-type/consts";

export function MediaTypesNavbar() {
  return (
    <nav>
      {MEDIA_TYPE_LIST.map(({ code, slug, label }) => (
        <Link key={code} href={`/${slug}`}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
