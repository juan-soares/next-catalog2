import styles from "./Header.module.css";

import { Logo } from "@/shared/components/ui";
import { Userbar } from "@/modules/auth";
import { FranchiseMarquee } from "@/modules/franchise";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />

      <Userbar />

      <FranchiseMarquee />
    </header>
  );
}
