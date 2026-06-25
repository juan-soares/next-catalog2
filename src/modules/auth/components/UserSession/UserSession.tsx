import styles from "./UserSession.module.css";

import Link from "next/link";
import { User } from "lucide-react";

export default function UserSession() {
  return (
    <div className={styles.userSession}>
      <Link href="/login">Entrar</Link>
      <User size={16} />
      <strong>Nickname</strong>
      <button>Sair</button>
    </div>
  );
}
