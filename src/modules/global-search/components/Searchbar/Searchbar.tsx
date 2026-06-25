import styles from "./Searchbar.module.css";
import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className={styles.searchBar}>
      <input type="search" placeholder="Pesquisar..." />
      <button>
        <Search size={12} />
      </button>
    </div>
  );
}
