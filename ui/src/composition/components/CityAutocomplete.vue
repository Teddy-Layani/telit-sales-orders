<template>
    <v-autocomplete
        :items="citiesCache"
        item-value="cityName"
        item-title="cityName"
        v-bind="$attrs"
        @update:model-value="$emit('update:modelValue', $event)"
        dense
    />
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useLocale } from 'vuetify';

const { t } = useLocale();

// Inputs
defineProps({
    citiesCache: {
        type: Array,
        required: true
    }
});

onMounted(async () => {});
</script>
