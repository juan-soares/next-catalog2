import styles from "./Header.module.css";
import { Logo } from "@/components/ui";
import { GlobalSearch } from "@/modules/global-search";
import { MediaTypeNavbar } from "@/modules/media-type";
import { UserSession } from "@/modules/auth";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <GlobalSearch />
      <MediaTypeNavbar />
      <UserSession />
    </header>
  );
}
