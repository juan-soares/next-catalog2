import Link from "next/link";
import { getMediaTypesLinks } from "../../services";

export function MediaTypesNavbar() {
  const navlinks = getMediaTypesLinks();

  return (
    <nav>
      {navlinks.map(({ href, label }) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
