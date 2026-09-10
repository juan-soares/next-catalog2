import { findUser } from "@/modules/user/repositories";
import type { UserWithPassword } from "@/modules/user/types";

export async function getUserWithPasswordByEmail(
  email: string,
): Promise<UserWithPassword | null> {
  return findUser({ email });
}
