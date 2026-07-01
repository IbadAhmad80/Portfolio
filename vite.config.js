import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // The stylesheets rely on cross-file @import/@extend semantics.
        // Silence Dart Sass 3.0 migration warnings until a full @use refactor.
        silenceDeprecations: [
          "import",
          "global-builtin",
          "color-functions",
          "legacy-js-api",
        ],
        quietDeps: true,
      },
    },
  },
});
