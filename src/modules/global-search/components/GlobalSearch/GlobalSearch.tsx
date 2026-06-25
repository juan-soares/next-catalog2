import styles from "./GlobalSearch.module.css";
import { Searchbar } from "../Searchbar";
import { ResultsList } from "../ResultsList";

export default function GlobalSearch() {
  return (
    <div className={styles.globalSearch}>
      <Searchbar />
      <ResultsList />
    </div>
  );
}
