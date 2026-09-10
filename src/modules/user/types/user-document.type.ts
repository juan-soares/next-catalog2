import type { HydratedDocument } from "mongoose";
import type { UserRole } from "@/modules/user/types";

export type UserDocument = HydratedDocument<{
  email: string;
  nickname: string;
  passwordHash: string;
  role: UserRole;
}>;
