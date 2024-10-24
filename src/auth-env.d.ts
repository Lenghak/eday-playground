/* eslint-disable check-file/filename-naming-convention */
import { type DefaultSession } from "next-auth";
import type { DefaultJWT, JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    id: string;
    at?: string;
    rt?: string;
    email: string;
    emailVerified: Date | null;
  }
}

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    user: JWT;
  }

  type User = JWT;
}
