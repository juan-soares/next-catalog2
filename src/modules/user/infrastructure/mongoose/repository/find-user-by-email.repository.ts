import { connectToDatabase } from "@/lib/mongoose";
import { UserDocument } from "../user-document.type";
import { UserModel } from "../user.model";

export async function findUserByEmail(
  email: string,
): Promise<UserDocument | null> {
  await connectToDatabase();

  const userDoc: UserDocument | null = await UserModel.findOne({ email });

  if (!userDoc) return null;

  return userDoc;
}
