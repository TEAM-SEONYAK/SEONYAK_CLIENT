import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, type PluginOption } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      svgr(),
      tsconfigPaths(),
      visualizer({
        filename: './dist/report.html',
        open: true,
        brotliSize: true,
      }) as PluginOption,
    ],
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
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
            // lottie-web은 lottie 청크로 분리
            if (id.includes('lottie-web')) {
              return 'lottie';
            }
            // react-calendar는 calendar 청크로 분리
            if (id.includes('react-calendar')) {
              return 'calendar';
            }
          },
        },
      },
    },
  };
});
