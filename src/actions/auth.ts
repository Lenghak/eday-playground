"use server";

import { auth, signIn, signOut, unstable_update } from "@/auth";

export {
  auth as getSession,
  signIn,
  signOut,
  unstable_update as updateSession,
};
