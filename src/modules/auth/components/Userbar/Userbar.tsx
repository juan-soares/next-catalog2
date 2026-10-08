import Link from "next/link";
import { UserCircle } from "lucide-react";
import { ADMIN_PANEL_PATH, LOGIN_PATH } from "@/shared/consts/paths.const";
import { auth } from "@/modules/auth/configs";
import { logoutAction } from "@/modules/auth/actions";

export async function Userbar() {
  const session = await auth();

  if (!session?.user)
    return (
      <div>
        <Link href={LOGIN_PATH}>Entrar</Link>
      </div>
    );

  return (
    <div>
      <Link href={ADMIN_PANEL_PATH}>
        <UserCircle />
        <span>{session.user.nickname}</span>
      </Link>
      <form action={logoutAction}>
        <button type="submit">Sair</button>
      </form>
    </div>
  );
}
