import Link from "next/link";
import styles from "./CatalogSortbar.module.css";
import { SORT_OPTIONS } from "../../consts";

export function CatalogSortbar() {
  return (
    <nav className={styles.catalogSortbar}>
      {SORT_OPTIONS.map(({ href, label }) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
