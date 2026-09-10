import { UserRole } from "@/modules/user";

export type AuthenticatedUser = {
  id: string;
  email: string;
  nickname: string;
  role: UserRole;
};
