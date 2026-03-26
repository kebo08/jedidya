import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryBase = '/jedidya/'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? repositoryBase : '/',
  plugins: [react()],
}))
