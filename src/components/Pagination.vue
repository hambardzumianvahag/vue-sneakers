<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const currentPage = computed(() => store.getters.getPage);

const changePage = (page) => {
    store.dispatch('setPage', page);
};
</script>

<template>
    <div class="flex gap-10 justify-center items-center pb-5">
        <button v-for="pageNumber in [1, 2, 3]" :key="pageNumber"
            class="border border-solid border-[#9B9B9B] text-[#9B9B9B] p-2 text-2xl cursor-pointer"
            :class="{ 'bg-blue-500 text-white': currentPage === pageNumber }" @click="changePage(pageNumber)">
            {{ pageNumber }}
        </button>
    </div>
</template>
