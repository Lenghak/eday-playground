import authConfig from "~/auth.config";

import NextAuth from "next-auth";

export const { auth, handlers, signIn, signOut, unstable_update } = NextAuth({
  session: { strategy: "jwt" },
  ...authConfig,
});
