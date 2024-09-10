<script setup>
import Header from '../components/Header.vue';
import Image from '../components/Image.vue';
import Sneakers from '../components/Sneakers.vue';
import Pagination from '../components/Pagination.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore()

const loading = computed(() => store.getters.getIsLoading)

</script>

<template>
    <div class="bg-white rounded-t-[20px]">
        <header>
            <Header />
        </header>
        <hr class=" border border-solid border-[#EAEAEA]">
        <main>
            <section class="flex justify-center w-full md:pl-[45px] p-5 md:pr-[60px] pt-[43px] pb-[44px]">
                <Image />
            </section>
            <section>
                <Sneakers />
            </section>
            <section v-if="!loading.value">
                <Pagination />
            </section>
        </main>
    </div>
</template>