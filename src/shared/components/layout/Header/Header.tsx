import styles from "./Header.module.css";

import { Logo } from "@/shared/components/ui";
import { Userbar } from "@/modules/auth";
import { GlobalSearch } from "@/features/globalSearch";
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
