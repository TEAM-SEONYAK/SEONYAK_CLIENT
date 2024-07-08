import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), svgr()],
    server: {
      port: 5173,
      proxy: {
        '/api': {
          target: env.VITE_APP_API_BASE_URL,
          secure: false,
          changeOrigin: true,
        },
      },
    },
  };
});
