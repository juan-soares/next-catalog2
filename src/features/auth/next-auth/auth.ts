import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { verifyUserCredentials } from "@/modules/user";

export const { auth, signIn, signOut, handlers } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const email = credentials.email;
        const password = credentials.password;

        if (typeof email !== "string" || typeof password !== "string") {
          return null;
        }

        const user = await verifyUserCredentials({
          email,
          password,
        });

        if (!user) {
          return null;
        }

        return user;
      },
    }),
  ],
});
