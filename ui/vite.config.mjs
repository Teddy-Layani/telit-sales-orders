// Plugins
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Fonts from 'unplugin-fonts/vite';
import Layouts from 'vite-plugin-vue-layouts';
import Vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// Utilities
import { defineConfig, loadEnv } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
    // const env = loadEnv(mode, process.cwd());
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    const workspaceId = process.env.VITE_WORKSPACE_ID;

    return {
        base: './',
        plugins: [
            VueRouter(),
            Layouts(),
            Vue({
                template: { transformAssetUrls }
            }),
            // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
            Vuetify({
                autoImport: true,
                styles: {
                    configFile: 'src/styles/settings.scss'
                }
            }),
            Components(),
            Fonts({
                google: {
                    families: [
                        {
                            name: 'Roboto',
                            styles: 'wght@100;300;400;500;700;900'
                        }
                    ]
                }
            }),
            AutoImport({
                imports: ['vue', 'vue-router'],
                eslintrc: {
                    enabled: true
                },
                vueTemplate: true
            })
        ],
        define: { 'process.env': {} },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            },
            extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
        },
        server: {
            proxy: {
                '/salesorders': {
                    changeOrigin: true,
                    target: `https://https://port5173-workspaces-ws-4h9dw.eu10.applicationstudio.cloud.sap/salesorders`,
                    secure: false
                }
            },
            port: 3000
        }
    };
});

// export default defineConfig({
//     base: './',
//     plugins: [
//         VueRouter(),
//         Layouts(),
//         Vue({
//             template: { transformAssetUrls }
//         }),
//         // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
//         Vuetify({
//             autoImport: true,
//             styles: {
//                 configFile: 'src/styles/settings.scss'
//             }
//         }),
//         Components(),
//         Fonts({
//             google: {
//                 families: [
//                     {
//                         name: 'Roboto',
//                         styles: 'wght@100;300;400;500;700;900'
//                     }
//                 ]
//             }
//         }),
//         AutoImport({
//             imports: ['vue', 'vue-router'],
//             eslintrc: {
//                 enabled: true
//             },
//             vueTemplate: true
//         })
//     ],
//     define: { 'process.env': {} },
//     resolve: {
//         alias: {
//             '@': fileURLToPath(new URL('./src', import.meta.url))
//         },
//         extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
//     },
//     server: {
//         proxy: {
//             '/cdp': {
//                 changeOrigin: true,
//                 target: `https://port6004-workspaces-${window.location.hash}.eu10.applicationstudio.cloud.sap/cdp/`,
//                 secure: false
//             }
//         },
//         port: 3000
//     }
// });
