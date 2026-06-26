import styles from "./CatalogSidebar.module.css";
import { CatalogQuery } from "../../types";
import { CatalogSearchbar } from "../CatalogSearchbar";
import { CatalogSortbar } from "../CatalogSortbar";

type Props = {
  query: CatalogQuery;
};

export default function CatalogSidebar({ query }: Props) {
  return (
    <aside className={styles.CatalogSidebar}>
      <CatalogSearchbar query={query.q} />
      <CatalogSortbar currentSort={query.sort} currentSearch={query.q} />
    </aside>
  );
}
