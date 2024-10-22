import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const signInSchema = z.object({});

export const signInResolver = zodResolver(signInSchema);

export type SignInSchema = z.infer<typeof signInSchema>;
