import styles from "./CatalogSidebar.module.css";
import { CatalogSearchbar } from "../CatalogSearchbar";

export default function CatalogSidebar() {
  return (
    <aside className={styles.CatalogSidebar}>
      <div>
        <CatalogSearchbar />
      </div>
    </aside>
  );
}
