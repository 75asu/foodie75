// Configs from shadcn docs
// It will throw error on "path" and "__dirname"
// When we start a typescript app using vite, it doesn't give types for node
// npm i -D @types/node -> this will remove the errors

import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
