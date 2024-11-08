import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "static",
  adapter: netlify(),
  plugins: ["prettier-plugin-astro"],
});
