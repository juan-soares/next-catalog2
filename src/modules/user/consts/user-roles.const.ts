import type { UserRole } from "@/modules/user/types";

export const USER_ROLES = ["admin", "user"] as const satisfies UserRole[];
