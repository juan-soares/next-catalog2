import { AuthenticatedUser } from "../types";
import { verifyUserCredentials } from "@/modules/user";

type Credentials = {
  email: string;
  password: string;
};

export async function authenticateUser({
  email,
  password,
}: Credentials): Promise<AuthenticatedUser | null> {
  const user = await verifyUserCredentials({ email, password });

  if (!user) return null;

  return {
    id: user.id,
    nickname: user.nickname,
  };
}
