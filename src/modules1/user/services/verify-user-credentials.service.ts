import { verifyPassword } from "../crypto";
import { userRepository } from "../repository";
import { User, UserDocument } from "../types";

type Credentials = {
  email: string;
  password: string;
};

export async function verifyUserCredentials({
  email,
  password,
}: Credentials): Promise<User | null> {
  const userDoc: UserDocument | null = await userRepository.findByEmail(email);
  if (!userDoc) return null;

  const passwordIsValid = await verifyPassword(password, userDoc.passwordHash);

  if (!passwordIsValid) return null;

  return {
    id: userDoc._id.toString(),
    email: userDoc.email,
    nickname: userDoc.nickname,
  };
}
