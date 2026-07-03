import styles from "./Header.module.css";
import { Logo } from "@/components/ui";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}
