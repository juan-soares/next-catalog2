import { User } from "next-auth";
import { UserDocument } from "../../infrastructure/mongoose/user-document.type";
import { userRepository } from "../../infrastructure/mongoose/repository";
import { verifyPassword } from "../../crypto";

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
