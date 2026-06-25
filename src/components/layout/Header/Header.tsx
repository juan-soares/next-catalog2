import styles from "./Header.module.css";
import { Logo } from "@/components/ui";
import { MediaTypeNavbar } from "@/modules/media-type";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <MediaTypeNavbar />
    </header>
  );
}
