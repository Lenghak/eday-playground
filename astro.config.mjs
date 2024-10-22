import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import MillionLint from "@million/lint";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    plugins: [
      MillionLint.astro({
        rsc: true,
      }),
    ],
  },
});
