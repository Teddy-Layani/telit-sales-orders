<template>
    <v-autocomplete
        :items="streetsCache"
        item-value="streetName"
        item-title="streetName"
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
    streetsCache: {
        type: Array,
        required: true
    }
});

</script>
