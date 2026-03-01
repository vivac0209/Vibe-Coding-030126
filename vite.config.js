import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 需要 base 設定
export default defineConfig({
  plugins: [react()],
  base: '/Vibe-Coding-030126/' // repo 名稱
})