import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt(),
    react(),
    expressiveCode({
      themes: ["github-dark-dimmed"], //https://expressive-code.com/guides/themes/
      plugins: [pluginLineNumbers()],
    }),
    mdx({
      gfm: true,
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    gfm: true,
  },
  site: "https://www.siwalik.in",
});
