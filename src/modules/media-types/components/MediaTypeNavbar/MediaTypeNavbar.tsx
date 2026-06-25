import Link from "next/link";
import styles from "./MediaTypeNavbar.module.css";
import { mediaTypeRegistry } from "../../registry";

export default function MediaTypeNavbar() {
  const navigationItems = Object.entries(mediaTypeRegistry);

  return (
    <nav className={styles.mediaTypeNavbar}>
      <ul>
        {navigationItems.map(([mediaType, { label, slug }]) => (
          <li key={mediaType}>
            <Link href={`/${slug}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
