import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verifyUserCredentials } from "@/modules/auth/services";
import type { UserRole } from "@/modules/user";

function isUserRole(value: unknown): value is UserRole {
  return value === "admin" || value === "user";
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const email = credentials.email;
        const password = credentials.password;

        if (typeof email !== "string" || typeof password !== "string") {
          return null;
        }

        return verifyUserCredentials({
          email,
          password,
        });
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.nickname = user.nickname;
        token.role = user.role;
      }

      return token;
    },

    async session({ session, token }) {
      if (
        typeof token.id !== "string" ||
        typeof token.nickname !== "string" ||
        !isUserRole(token.role)
      ) {
        return session;
      }

      session.user.id = token.id;
      session.user.nickname = token.nickname;
      session.user.role = token.role;

      return session;
    },
  },
});
