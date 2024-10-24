/* eslint-disable check-file/filename-naming-convention */
import { ky } from "@/lib/ky/public";

import { postVerifyOAuthToken } from "@/services/auth/api";
import type { NextAuthConfig } from "next-auth";
import Facebook from "next-auth/providers/facebook";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import type { Tokens } from "@/types/jwt";

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
    async jwt({ token, trigger, account }) {
      if (trigger === "signIn" || trigger === "signUp") {
        let user = undefined;

        if (account?.provider === "google" && account.id_token) {
          user = await postVerifyOAuthToken({
            provider: "google",
            token: account.id_token,
          });
        }

        if (account?.provider === "facebook" && account.access_token) {
          user = await postVerifyOAuthToken({
            provider: "facebook",
            token: account.access_token,
          });
        }

        if (account?.provider === "github" && account.access_token) {
          user = await postVerifyOAuthToken({
            provider: "github",
            token: account.access_token,
          });
        }

        if (user?.tokens) {
          token.at = user?.tokens.accessToken;
          token.rt = user?.tokens.refreshToken;
        }

        return { ...token };
      }

      if (trigger === "update") {
        const tokens = await ky
          .extend({
            headers: {
              Authorization: "Bearer " + token.rt,
            },
          })
          .post("refresh")
          .json<Tokens>();

        token.at = tokens.accessToken;
        token.rt = tokens.refreshToken;

        return token;
      }

      return token;
    },
    session({ session, token }) {
      if (token?.email) session.user = token;
      return session;
    },
  },
} satisfies NextAuthConfig;
