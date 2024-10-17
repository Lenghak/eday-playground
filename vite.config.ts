import { vitePlugin as remix } from "@remix-run/dev";

import { vercelPreset } from "@vercel/remix/vite";
import { env } from "node:process";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const million =
  env.NODE_ENV === "development" ? await import("@million/lint") : undefined;

export default defineConfig({
  plugins: [
    vercelPreset(),
    million?.vite(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});
