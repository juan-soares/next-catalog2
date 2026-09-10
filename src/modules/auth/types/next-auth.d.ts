import type { DefaultSession } from "next-auth";
import type { UserRole } from "@/modules/user/types";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      nickname: string;
      role: UserRole;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    nickname: string;
    role: UserRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    nickname: string;
    role: UserRole;
  }
}
