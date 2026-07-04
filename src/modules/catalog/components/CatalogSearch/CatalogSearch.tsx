import styles from "./CatalogSearch.module.css";

export function CatalogSearch() {
  return (
    <div className={styles.catalogSearch}>
      <input type="search" placeholder="Pesquisar..." name="q" />
    </div>
  );
}
