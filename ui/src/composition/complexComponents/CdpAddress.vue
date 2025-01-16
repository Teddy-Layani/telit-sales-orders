<template>
    <div class="d-flex align-items ga-4 flex-wrap">

        <city-autocomplete
            v-model="address.city"
            :max-width="250"
            variant="outlined"
            :label="t('customerInfo.city')"
            v-bind="$attrs"
            :citiesCache="citiesCache"
            dense
        />

        <street-autocomplete
            v-model="address.Street"
            :max-width="250"
            variant="outlined"
            :label="t('customerInfo.Street')"
            v-bind="$attrs"
            :streetsCache="streetsCache"
            dense
        />

        <v-text-field
            v-model="address.StreetNumber"
            :max-width="150"
            variant="outlined"
            :label="t('customerInfo.StreetNumber')"
            v-bind="$attrs"
            dense
        />

        <v-text-field
            v-model="address.Apartment"
            :max-width="150"
            variant="outlined"
            :label="t('customerInfo.Apartment')"
            type="email"
            v-bind="$attrs"
        />

        <v-text-field
            v-model="address.Entrance"
            :max-width="150"
            variant="outlined"
            :label="t('customerInfo.Entrance')"
            v-bind="$attrs"
        />
        
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useLocale } from 'vuetify';
import CityAutocomplete from '@/composition/components/CityAutocomplete.vue';
import StreetAutocomplete from '@/composition/components/StreetAutocomplete.vue';

const { t } = useLocale();

// Inputs
defineProps({
    address: {
        type: Object,
        required: true
    },
    citiesCache: {
        type: Array,
        required: true
    },
    streetsCache: {
        type: Array,
        required: true
    }
});
</script>
