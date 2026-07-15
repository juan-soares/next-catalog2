import styles from "./Header.module.css";
import { MediaTypeNavbar } from "@/modules/media-type";
import { Logo } from "@/components/ui";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <MediaTypeNavbar />
    </header>
  );
}
