import { connectToDatabase } from "@/lib/mongoose";
import type {
  FindUserFilters,
  UserDocument,
  UserWithPassword,
} from "@/modules/user/types";
import { UserModel } from "@/modules/user/models";

export async function findUserRepository(
  filters: FindUserFilters = {},
): Promise<UserWithPassword | null> {
  await connectToDatabase();

  const userDoc: UserDocument = await UserModel.findOne(filters).lean();

  if (!userDoc) return null;

  return {
    id: userDoc._id.toString(),
    email: userDoc.email,
    nickname: userDoc.nickname,
    passwordHash: userDoc.passwordHash,
  };
}
