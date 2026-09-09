import { getUserWithPasswordByEmail, type User } from "@/modules/user";
import type { LoginCredentialsInput } from "@/modules/auth/types";
import { verifyPassword } from "@/modules/auth/crypto";

export async function verifyUserCredentials({
  email,
  password,
}: LoginCredentialsInput): Promise<User | null> {
  const user = await getUserWithPasswordByEmail(email);

  if (!user) {
    return null;
  }

  const isValid = await verifyPassword(password, user.passwordHash);

  if (!isValid) {
    return null;
  }

  return {
    id: user.id,
    email: user.email,
    nickname: user.nickname,
  };
}
