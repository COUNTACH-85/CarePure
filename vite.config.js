import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv';


export default defineConfig({
  plugins: [react(), tailwindcss()],
})
