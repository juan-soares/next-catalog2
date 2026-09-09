"use server";

import { signOut } from "../configs/next-auth.config";

export async function logoutAction() {
  await signOut({
    redirectTo: "/",
  });
}
