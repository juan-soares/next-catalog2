import { auth } from "@/modules/auth/configs";

export async function isAdminUser(): Promise<boolean> {
  const session = await auth();

  return session?.user.role === "admin";
}
