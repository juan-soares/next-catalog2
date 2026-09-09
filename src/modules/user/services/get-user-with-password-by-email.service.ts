import { findUserRepository } from "@/modules/user/repositories";
import { UserWithPassword } from "@/modules/user/types";

export async function getUserWithPasswordByEmail(
  email: string,
): Promise<UserWithPassword | null> {
  return findUserRepository({ email });
}
