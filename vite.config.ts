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
    // build: {
    //   chunkSizeWarningLimit: 1600,
    //   rollupOptions: {
    //     output: {
    //       manualChunks(id) {
    //         if (id.includes('node_modules')) {
    //           return id.toString().split('node_modules/')[1].split('/')[0].toString();
    //         }
    //       },
    //     },
    //   },
    // },
  };
});
