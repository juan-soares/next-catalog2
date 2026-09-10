"use server";

import { signOut } from "@/modules/auth/configs";

export async function logoutAction() {
  await signOut({
    redirectTo: "/",
  });
}
