import { UserModel } from "../models";
import { UserDocument } from "../types";
import { connectToDatabase } from "@/lib/mongoose";

export async function findUserByEmail(
  email: string,
): Promise<UserDocument | null> {
  await connectToDatabase();

  const userDoc: UserDocument | null = await UserModel.findOne({ email });

  if (!userDoc) return null;

  return userDoc;
}
