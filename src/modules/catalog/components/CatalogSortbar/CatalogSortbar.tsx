import Link from "next/link";
import type { CatalogSort } from "../../types";
import { buildCatalogUrl } from "../../helpers";

import styles from "./CatalogSortbar.module.css";

type Props = {
  currentSort?: CatalogSort;
  currentSearch?: string;
};

export default function CatalogSortBar({ currentSort, currentSearch }: Props) {
  return (
    <nav className={styles.CatalogSortBar} aria-label="Ordenação do catálogo">
      <Link
        href={buildCatalogUrl({
          q: currentSearch,
          sort: "alph",
        })}
        data-active={currentSort === "alph"}
      >
        A–Z
      </Link>

      <Link
        href={buildCatalogUrl({
          q: currentSearch,
          sort: "updated",
        })}
        data-active={currentSort === "updated"}
      >
        Recentes
      </Link>

      <Link
        href={buildCatalogUrl({
          q: currentSearch,
          sort: "released",
        })}
        data-active={currentSort === "released"}
      >
        Lançamentos
      </Link>
    </nav>
  );
}
