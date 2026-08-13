import { findUserByEmail } from "@/modules/user";
import { AuthenticatedUser } from "../types";

type Credentials = {
  email: string;
  password: string;
};

export async function authenticateUser({
  email,
  password,
}: Credentials): Promise<AuthenticatedUser | null> {
  const user = await findUserByEmail(email);
  if (!user) return null;

  return { nickname: user.nickname };
}
