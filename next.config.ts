import { env } from "@/env";
import MillionLint from "@million/lint";

console.debug("Loading Env: \n", env);

const nextConfig = {};

export default process.env.NODE_ENV === "development"
  ? MillionLint.next({ rsc: true })(nextConfig)
  : nextConfig;
