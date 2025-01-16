<template>
  <v-app-bar color="primary">
    <v-app-bar-title>
      <!-- <v-icon icon="mdi-circle-slice-6" /> -->

      {{ t('title') }}
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import { useLocale } from 'vuetify';
const { t } = useLocale();
</script>
