import { UserModel } from "../models";
import { User, UserDocument } from "../types";

export async function findUserByEmail(email: string): Promise<User | null> {
  const userDoc: UserDocument | null = await UserModel.findOne({ email });

  if (!userDoc) return null;

  return {
    id: userDoc._id.toString(),
    email: userDoc.email,
    nickname: userDoc.nickname,
  };
}
