import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  base: './', // 建議加入，確保部署時路徑正確
  build: {
    outDir: '../dist',
    emptyOutDir: true // 每次 build 自動清空 dist
  },
  server: {
    port: 8080
  }
})