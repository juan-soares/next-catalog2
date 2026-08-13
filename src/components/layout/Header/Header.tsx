import styles from "./Header.module.css";
import { MediaTypesNavbar } from "../MediaTypesNavbar";
import { Logo } from "@/components/ui";
import { GlobalSearch } from "@/features/globalSearch";
import { Userbar } from "@/features/auth";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <GlobalSearch />
      <Userbar />
      <MediaTypesNavbar />
    </header>
  );
}
