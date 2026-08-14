import styles from "./Header.module.css";

import { Logo } from "@/components/ui";
import { GlobalSearch } from "@/features/globalSearch";
import { Userbar } from "@/features/auth";
import { MediaTypesNavbar } from "./MediaTypesNavbar";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <GlobalSearch />
      <Userbar />
      <MediaTypesNavbar />
    </header>
  );
}
