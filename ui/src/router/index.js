/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import SalesOrdersPage from '@/pages/SalesOrdersPage.vue';
import SODetailsPage from '@/pages/SODetailsPage.vue';

import Layout from '@/layouts/default.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        props: false,
        redirect:'/salesorders',
        children: [
            {
                path: '/salesorders',
                name: 'salesorders',
                component: SalesOrdersPage,
                props: false
            },
            {
                path: '/salesorder/:id',
                name: 'sodetails',
                component: SODetailsPage,
                props: true
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router;
