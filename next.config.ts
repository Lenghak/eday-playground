import { env } from "@/env";
import MillionLint from "@million/lint";

void env;

const nextConfig = {};

export default process.env.NODE_ENV === "development"
  ? MillionLint.next({ rsc: true })(nextConfig)
  : nextConfig;
