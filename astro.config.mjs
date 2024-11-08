import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: netlify(),
  plugins: ["prettier-plugin-astro"]
});