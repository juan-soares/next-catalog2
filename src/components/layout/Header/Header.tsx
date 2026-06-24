import { MediaTypeNavbar } from "@/modules/core";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <MediaTypeNavbar />
    </header>
  );
}
