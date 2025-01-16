<template>

<v-data-table :headers="state.headers" :items="state.salesOrders">

    <template #item.ItemNumber="{item}" >
        <span @click="naviagteToItem(item)"  class="cursor-pointer" >{{item.ItemNumber}}</span>
    </template>
</v-data-table>


</template>

<script setup>
import { getSalesOrders } from '@/core/api';
import { onMounted, ref, computed, reactive } from 'vue';
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
import {useRouter} from 'vue-router';
import { mdi } from 'vuetify/iconsets/mdi-svg';
const router = useRouter();
const { orders } = mockData();
const {t} = useLocale();
const state = reactive({
    salesOrders: [],
    headers:[
        {title:t('salesOrdersHeaders.itemNum'),
         key:'ItemNumber'
        },
        {title:t('salesOrdersHeaders.price'),
         key:'Price'
        }
    ]
});

const loadData = async () => {
    try {
        const params = {
            $expand: 'SalesItemSet'
        };
        const response = await getSalesOrders(params);
        state.salesOrders = response? response : orders.data;
    } catch (error) {
        console.log(error);
    }
};

const naviagteToItem = (item)=>{
router.push({path:`salesorder/${item.ItemNumber}`});
}

onMounted(() => {
    loadData();
});
</script>

<style lang="css" scoped></style>
