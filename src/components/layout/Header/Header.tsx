import styles from "./Header.module.css";
import { Logo } from "@/components/ui";
import { GlobalSearch } from "@/features/globalSearch";
import { MediaTypesNavbar } from "@/modules/1-media-type";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <GlobalSearch />
    </header>
  );
}
