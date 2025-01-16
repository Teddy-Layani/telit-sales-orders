<template>
{{id}}


</template>

<script setup>
import {
    getSalesOrders
} from '@/core/api';
import { onMounted, ref, computed } from 'vue';
import { useLocale } from 'vuetify';
import { VDateInput } from 'vuetify/labs/components';
import { useRoute } from 'vue-router';
import {
    mdiPencil,
    mdiContentSave,
    mdiClose,
    mdiPlus,
    mdiMinus
} from '@mdi/js';
import { useConstants } from '@/composition/useConstants';
import { mockData } from '@/composition/mockData';
import CdpAddress from '@/composition/complexComponents/CdpAddress.vue';

import { mdi } from 'vuetify/iconsets/mdi-svg';
const props = defineProps({
    id:{
        type:String
    }
})
</script>

<style lang="css" scoped>
</style>
