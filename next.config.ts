import MillionLint from "@million/lint";

const nextConfig = {};

export default process.env.NODE_ENV === "development"
  ? MillionLint.next({ rsc: true })(nextConfig)
  : nextConfig;
