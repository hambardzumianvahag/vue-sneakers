<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';
const props = defineProps({
    sneaker: {
        type: Object
    }
})
const store = useStore()

const addBalance = () => {
    store.dispatch('addToBalance', props.sneaker)
}

const removeBalance = () => {
    store.dispatch('removeSneaker', props.sneaker);
};

const isSelected = computed(() =>
    store.getters.isSneakerSelected(props.sneaker)
);


</script>

<template>
    <div class="max-w-[210px] ">
        <div class="border border-solid border-[#F3F3F3] rounded-[40px] px-[33px] pt-5 pb-[34px]">
            <div>
                <img :src="sneaker.imageUrl" alt="sneaker">
            </div>
            <p class="py-[14px] text-sm">{{ sneaker.title }}</p>
            <div class="flex justify-between items-center">
                <div>
                    <p class="text-[11px] text-[#BDBDBD]">Цена:</p>
                    <p class="text-sm font-bold">{{ sneaker.price }} Руб․</p>
                </div>
                <div>
                    <img v-if="isSelected" src="../assets/img/selected-icon.png" alt="selected" class="cursor-pointer"
                        @click="removeBalance" />
                    <img v-else class="cursor-pointer" src="../assets/img/add-icon.png" alt="add" @click="addBalance">
                </div>
            </div>
        </div>
    </div>
</template>