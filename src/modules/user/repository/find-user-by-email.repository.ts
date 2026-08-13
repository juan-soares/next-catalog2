import { UserModel } from "../models";
import { UserDocument } from "../types";

export async function findUserByEmail(
  email: string,
): Promise<UserDocument | null> {
  const userDoc: UserDocument | null = await UserModel.findOne({ email });

  if (!userDoc) return null;

  return userDoc;
}
