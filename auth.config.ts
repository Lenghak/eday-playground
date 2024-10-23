import type { NextAuthConfig } from "next-auth";
import Facebook from "next-auth/providers/facebook";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default {
  providers: [Google, Facebook, GitHub],
  pages: {
    newUser: "/",
    verifyRequest: "/",
    signOut: "/",
    signIn: "/auth/sign-in",
    error: "/auth/error",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
} satisfies NextAuthConfig;
