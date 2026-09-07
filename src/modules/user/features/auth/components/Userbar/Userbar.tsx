import Link from "next/link";
import { UserCircle } from "lucide-react";
import { LOGIN_PATH } from "@/consts/paths";
import { auth } from "../../next-auth/auth";
import { logoutAction } from "../../actions";

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
      <UserCircle />
      <span>{session.user.nickname}</span>
      <form action={logoutAction}>
        <button type="submit">Sair</button>
      </form>
    </div>
  );
}
