<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import Bracket from './Bracket.vue';

const store = useStore()
const balance = computed(() => store.getters.getBalance)
const showModal = ref(false)
</script>

<template>
    <div
        class="flex md:flex-row flex-col justify-between md:items-center items-start md:gap-0 gap-5 md:pl-[45px] pl-5 pr-[60px] pt-[43px] pb-[44px]">
        <div class="flex md:flex-row flex-col md:items-center items-start gap-4 cursor-pointer">
            <div>
                <img src="../img/logo.png" alt="logo">
            </div>
            <div>
                <h1 class="md:text-xl text-sm font-bold">VUE SNEAKERS</h1>
                <p class="text-[#9D9D9D] text-sm">Магазин лучших кроссовок</p>
            </div>
        </div>
        <div class="flex md:flex-row flex-col md:items-center items-start gap-8 text-[#9B9B9B] text-sm">
            <div class="flex items-center gap-[10px]  cursor-pointer" @click="showModal = true">
                <img src="../img/bracket-icon.png" alt="bracket">
                <p>{{ balance }} Руб․</p>
            </div>
            <div class="flex items-center gap-[10px] cursor-pointer">
                <img src="../img/fav-icon.png" alt="fav">
                <p>Закладки</p>
            </div>
            <div class="flex items-center gap-[10px] cursor-pointer">
                <img src="../img/profile-icon.png" alt="profile">
                <p>Профиль</p>
            </div>
        </div>
        <Bracket :isVisible="showModal" @update:isVisible="showModal = $event" />
    </div>
</template>