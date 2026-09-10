import { UserRole } from "@/modules/user/types";

export type User = {
  id: string;
  nickname: string;
  email: string;
  role: UserRole;
};

export type UserWithPassword = User & {
  passwordHash: string;
};
