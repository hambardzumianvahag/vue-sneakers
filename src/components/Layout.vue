<script setup>
import Header from './Header.vue'
import Image from './Image.vue'
import Pagination from './Pagination.vue';
import Sneakers from './Sneakers.vue'
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
            <section>
                <Pagination />
            </section>
        </main>
    </div>
</template>