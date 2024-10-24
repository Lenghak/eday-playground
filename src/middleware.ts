import { NextResponse } from "next/server";

import { auth as middleware } from "@/auth";

// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)

// 2. Wrapped middleware option
export default middleware(function middleware(req) {
  const currPathname = req.nextUrl.pathname;
  // Your custom middleware logic goes here
  const session = req.auth;
  const isUserSignedIn = session?.user.at !== undefined;

  const isAuthPath = currPathname.startsWith("/auth");

  if (isUserSignedIn && isAuthPath)
    return NextResponse.redirect(new URL("/", req.url));
});
