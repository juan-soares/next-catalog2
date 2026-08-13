import Link from "next/link";
import { UserCircle } from "lucide-react";
import { LOGIN_PATH } from "@/consts/paths";

export function Userbar() {
  const user = 1;

  if (!user)
    return (
      <div>
        <Link href={LOGIN_PATH}>Entrar</Link>
      </div>
    );

  return (
    <div>
      <UserCircle />
      <span>nickname</span>
      <button>Sair</button>
    </div>
  );
}
