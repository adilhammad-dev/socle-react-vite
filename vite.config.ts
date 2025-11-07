import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath, URL} from 'node:url'

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '')
    const port = parseInt(env.VITE_FRONTEND_PORT || '3000', 10)

    return {
        plugins: [react()],
        server: {
            port,
            proxy: {
                '/estimating-platform': {
                    target: 'http://localhost:8012',
                    changeOrigin: true,
                    secure: false,
                    rewrite: (path) => path.replace(/^\/estimating-platform/, ''),
                },
            },
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                'services': fileURLToPath(new URL('./src/services', import.meta.url)),
                'components': fileURLToPath(new URL('./src/components', import.meta.url)),
                'containers': fileURLToPath(new URL('./src/containers', import.meta.url)),
                'pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
                'routes': fileURLToPath(new URL('./src/routes', import.meta.url)),
                'types': fileURLToPath(new URL('./src/types', import.meta.url)),
                'utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
                'hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
                'examples': fileURLToPath(new URL('./src/examples', import.meta.url)),
                'theme': fileURLToPath(new URL('./src/theme', import.meta.url)),
                'contexts': fileURLToPath(new URL('./src/contexts', import.meta.url)),
                'config': fileURLToPath(new URL('./src/config', import.meta.url)),
                'api': fileURLToPath(new URL('./src/api', import.meta.url)),
            },
        },
    }
})
