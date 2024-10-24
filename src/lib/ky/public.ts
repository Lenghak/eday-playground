import { env } from "@/env";
import primitiveKy from "ky";

export const ky = primitiveKy.create({
  prefixUrl: env.NEXT_PUBLIC_API_URL,
});
