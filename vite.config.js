import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//vitejs.dev/config/
https: export default defineConfig({
  base: "/se_project_react/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
