<template>
    <v-app-bar color="primary" class="px-10">
        <div
            class="d-flex justify-space-between align-center"
            style="width: 100%"
        >
            <v-img :src="logo" :max-width="100" />
            <div class="d-flex justify-center">
                <v-app-bar-title class="flex-grow-1">{{
                    t('title')
                }}</v-app-bar-title>
            </div>

            <span />
        </div>
    </v-app-bar>

    <v-container fluid class="pa-10">
        <router-view />
    </v-container>
</template>

<script setup>
import { onMounted, ref, computed, watch, onUpdated } from 'vue';
import { useLocale } from 'vuetify';
import logo from '@/assets/telit-logo.png';
import { useTypes } from '@/composition/useTypes';
import { useConstants } from '@/composition/useConstants';
import { useRoute, useRouter } from 'vue-router';

const { t } = useLocale();
const route = useRoute();
const router = useRouter();

onMounted(async () => {
    // // Check if the current route is the root
    // if (route.path === '/') {
    //     router.push({ name: 'salesorders' });
    // }
});
</script>
