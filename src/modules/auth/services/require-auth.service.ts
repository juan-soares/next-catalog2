import { redirect } from "next/navigation";
import { LOGIN_PATH } from "@/consts/paths";
import { auth } from "@/modules/auth/configs";

export async function requireAuth() {
  const session = await auth();

  if (!session?.user) {
    redirect(LOGIN_PATH);
  }

  return session;
}
