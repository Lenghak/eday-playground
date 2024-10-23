import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const oAuthProvidersSchema = z.enum([
  "facebook",
  "google",
  "github",
  "credential",
]);

export const oAuthSignInSchema = z.object({
  provider: oAuthProvidersSchema,
});

export const oAuthSignInResolver = zodResolver(oAuthSignInSchema);

export type OAuthProvidersSchema = z.infer<typeof oAuthProvidersSchema>;
export type OAuthSignInSchema = z.infer<typeof oAuthSignInSchema>;
