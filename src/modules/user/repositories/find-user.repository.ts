import { connectToDatabase } from "@/lib/mongoose";
import type { FindUserFilters, UserWithPassword } from "@/modules/user/types";
import { UserModel } from "@/modules/user/models";

export async function findUser(
  filters: FindUserFilters = {},
): Promise<UserWithPassword | null> {
  await connectToDatabase();

  const userDoc = await UserModel.findOne(filters).lean();

  if (!userDoc) return null;

  return {
    id: userDoc._id.toString(),
    email: userDoc.email,
    nickname: userDoc.nickname,
    role: userDoc.role,
    passwordHash: userDoc.passwordHash,
  };
}
