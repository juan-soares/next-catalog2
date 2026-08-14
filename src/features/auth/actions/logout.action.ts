"use server";

import { signOut } from "../next-auth/auth";

export async function logoutAction() {
  await signOut({
    redirectTo: "/",
  });
}
