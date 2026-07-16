import Link from "next/link";
import { MEDIA_TYPES_LINK } from "../../media-types.const";

export function MediaTypesNavbar() {
  return (
    <nav>
      {MEDIA_TYPES_LINK.map(({ href, label }) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
