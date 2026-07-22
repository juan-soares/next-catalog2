import Link from "next/link";
import { mediaTypesNavigation } from "../../consts";

export function MediaTypesNavbar() {
  return (
    <nav>
      {mediaTypesNavigation.map(({ href, label }) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
