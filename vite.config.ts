import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// GitHub Pages repo name — must match the repository name exactly
const GITHUB_REPO = '/autoexport-schweiz';

// All known service slugs — must match src/data/services.ts
const serviceSlugs = [
  'auto-export',
  'auto-ankauf',
  'unfallwagen-ankauf',
  'motorschaden-ankauf',
  'getriebeschaden-ankauf',
  'gebrauchtwagen-ankauf',
  'luxusauto-ankauf',
  'firmenwagen-ankauf',
  'auto-export-deutschland',
  'auto-export-afrika',
  'auto-export-osteuropa',
  'mercedes-export',
  'bmw-export',
  'audi-export',
  'vw-export',
  'auto-bewertung',
];

// All known legal page slugs — must match LegalPage.tsx legalPages keys
const legalSlugs = ['datenschutz', 'impressum', 'agb'];

// https://vitejs.dev/config/
export default defineConfig({
  // Base path for GitHub Pages: github.io/<repo-name>/
  base: GITHUB_REPO + '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  ssgOptions: {
    script: 'defer',
    formatting: 'minify',
    // Output /route/index.html instead of /route.html
    // Gives clean URLs on GitHub Pages (no .html extension needed)
    dirStyle: 'directory',
    /**
     * Expand dynamic route parameters into concrete URLs.
     * vite-react-ssg calls this with the list of route paths it detects,
     * e.g. ["/", "/kontakt", "/service/:slug", "/:page", "/admin", "*"].
     * We replace each dynamic segment with the real known values.
     */
    includedRoutes(paths: string[]) {
      return paths.flatMap((route) => {
        if (route.includes(':slug')) {
          // Expand /service/:slug → one URL per service
          return serviceSlugs.map((slug) => `/service/${slug}`);
        }
        if (route.includes(':page')) {
          // Expand /:page → only the three valid legal pages
          return legalSlugs.map((p) => `/${p}`);
        }
        if (route === '*') {
          // Skip catch-all — no static file needed for 404
          return [];
        }
        return [route];
      });
    },
  },
});
