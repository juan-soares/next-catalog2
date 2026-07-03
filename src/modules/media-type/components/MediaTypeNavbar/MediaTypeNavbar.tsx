import styles from "./MediaTypeNavbar.module.css";
import { MEDIA_TYPE_NAV_LINKS } from "../../consts";
import Link from "next/link";

export function MediaTypeNavbar() {
  return (
    <nav className={styles.mediaTypeNavbar}>
      {MEDIA_TYPE_NAV_LINKS.map(({ href, label }) => (
        <Link key={href} href={href}>{label}</Link>
      ))}
    </nav>
  );
}
