import styles from "./CatalogSidebar.module.css";
import { CatalogQuery } from "../../types";
import { CatalogSearchbar } from "../CatalogSearchbar";

type Props = {
  query: CatalogQuery;
};

export default function CatalogSidebar({ query }: Props) {
  return (
    <aside className={styles.CatalogSidebar}>
      <CatalogSearchbar query={query.q} />
    </aside>
  );
}
