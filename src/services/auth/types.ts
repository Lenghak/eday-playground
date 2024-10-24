import { z } from "zod";

import { tokensSchema } from "@/types/jwt";
import { userSchema } from "@/types/users";

export const oauthProviderSchema = z.enum([
  "credential",
  "google",
  "github",
  "facebook",
]);
export type OAuthProvider = z.infer<typeof oauthProviderSchema>;

export const oauthVerifyRequestSchema = z.object({
  token: z.string(),
  provider: oauthProviderSchema,
});
export type OAuthVerifyBody = z.infer<typeof oauthVerifyRequestSchema>;

export const oauthVerifyResponesSchema = z.object({
  user: userSchema,
  tokens: tokensSchema,
});
export type OAuthVerifyResponse = z.infer<typeof oauthVerifyResponesSchema>;
