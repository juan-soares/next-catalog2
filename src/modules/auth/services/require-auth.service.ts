import { redirect } from "next/navigation";
import { LOGIN_PATH } from "@/shared/consts/paths.const";
import { auth } from "@/modules/auth/configs";

export async function requireAuth() {
  const session = await auth();

  if (!session?.user) {
    redirect(LOGIN_PATH);
  }

  return session;
}
