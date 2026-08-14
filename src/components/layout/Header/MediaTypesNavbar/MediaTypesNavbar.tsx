import Link from "next/link";
import { getMediaTypesLinks } from "./MediaTypesNavbar.services";

export function MediaTypesNavbar() {
  const links = getMediaTypesLinks();

  return (
    <ul>
      {links.map(({ label, href }) => (
        <li key={href}>
        <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
