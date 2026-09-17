import Link from "next/link";
import { CATALOG_MEDIAS_PATH } from "@/shared/consts";
import { MEDIA_TYPES_LIST } from "@/modules/media-type/consts";

export function MediaTypesNavbar() {
  return (
    <nav>
      {MEDIA_TYPES_LIST.map(({ code, label, slug }) => (
        <Link key={code} href={`${CATALOG_MEDIAS_PATH}/${slug}`}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
