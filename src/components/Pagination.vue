<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const totalPages = computed(() => store.getters.getTotalPages)
const currentPage = computed(() => store.getters.getPage);

const pages = computed(() => {
    return Array.from({ length: totalPages.value }, (_, i) => i + 1)
})


const changePage = (page) => {
    store.dispatch('setPage', page);
};
</script>

<template>
    <div class="flex justify-center items-center bg-gray-200">
        <div class="bg-gray-200 p-5 shadow-2xl">
            <button v-for="pageNumber in pages" :key="pageNumber"
                class="text-[#9B9B9B] py-2  px-5 text-xl cursor-pointer shadow-inner bg-gray-200 m-1 border border-solid border-[#d8d6d6] rounded-xl"
                :class="{ 'bg-blue-500 text-black': currentPage === pageNumber }" @click="changePage(pageNumber)">
                {{ pageNumber }}
            </button>
        </div>
    </div>
</template>
