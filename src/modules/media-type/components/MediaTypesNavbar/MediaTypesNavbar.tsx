import Link from "next/link";
import { MEDIA_TYPES_LIST } from "@/modules/media-type/consts";

export function MediaTypesNavbar() {
  return (
    <nav>
      {MEDIA_TYPES_LIST.map(({ code, label, slug }) => (
        <Link key={code} href={`/${slug}`}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
