<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Sneaker from "./Sneaker.vue";
import Skeleton from "./Skeleton.vue";
const store = useStore()

onMounted(() => {
    store.dispatch('fetchSneakers')
})

const sneakers = computed(() => store.getters.allSneakers)
const loading = computed(() => store.getters.getIsLoading);


</script>

<template>
    <h2 class="md:pl-[45px] md:pr-[60px] text-[32px] px-5 font-bold">Все кроссовки</h2>
    <div
        class="flex flex-wrap md:justify-between justify-center md:gap-10 gap-5  w-full md:pl-[45px] p-5 md:pr-[60px] pt-[43px] pb-[44px] ">
        <div v-for="sneaker in sneakers" :key="sneaker.id">
            <div v-if="loading.value"
                class="border animate-pulse border-solid border-[#F3F3F3] rounded-[40px] px-[33px] pt-5 pb-[34px]">
                <Skeleton />
            </div>
            <div v-else>
                <div v-if="sneaker.title">
                    <Sneaker :sneaker="sneaker" />
                </div>
            </div>
        </div>
    </div>
</template>