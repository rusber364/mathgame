import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './tests.setup.ts',
    // TODO: vitest don't support react native with module cjs
    alias: {
      'react-native': 'react-native-web',
    },
  },
})
