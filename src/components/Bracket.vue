<script setup>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex';

const store = useStore()

const props = defineProps({
    isVisible: Boolean
})

const success = ref(false)
const selectedSneakers = computed(() => store.getters.allSelectedSneakers)
const balance = computed(() => store.getters.getBalance)
const emit = defineEmits(['update:isVisible'])

const removeBalance = (sneaker) => {
    store.dispatch('removeSneaker', sneaker);
};

const close = () => {
    emit('update:isVisible', false)
}

const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
        close()
    }
}

watch(() => props.isVisible, (newValue) => {
    if (newValue) {
        document.body.classList.add('overflow-hidden')
    } else {
        document.body.classList.remove('overflow-hidden')
    }
})



const confirmOrder = () => {
    success.value = true
    store.dispatch('confirmOrder')
}

const afterConfirm = () => {
    success.value = false
    close()
}

</script>

<template>
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center "
        @click="handleOverlayClick">
        <div class="bg-white w-[385px] h-full  py-8 px-[30px] overflow-y-auto flex flex-col relative" @click.stop>
            <h2 class="font-bold text-2xl">Корзина</h2>
            <div v-if="selectedSneakers.length === 0 && !success">
                <div class="flex flex-col justify-center items-center pt-[109px]">
                    <img src="../assets/img/empty.png" alt="empty">
                    <h2 class="font-semibold text-[22px] mt-[21px] mb-[9px]">Корзина пустая</h2>
                    <p class="text-center text-[#9B9B9B]">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <button @click="close"
                        class="flex items-center justify-center gap-4 bg-[#9DD458] font-semibold rounded-[18px] px-[31px] py-[17px] text-white text-[20px] mt-10"><span
                            class="text-[30px]"> &#8592;</span> Вернуться
                        назад</button>
                </div>
            </div>
            <div v-else-if="!success">
                <div v-for="sneaker in selectedSneakers" :key="sneaker.id">
                    <div
                        class="border  border-solid border-[#F3F3F3] rounded-[40px] mt-5 md:px-[20px] p-5 flex justify-between items-center gap-[21px]">
                        <div>
                            <img src="../assets/img/sneaker.webp" alt="sneaker" class="w-[133px]">
                        </div>
                        <div>
                            <p class="py-[14px] text-sm">{{ sneaker.title }}</p>
                            <div class="flex justify-between items-center">
                                <div>
                                    <p class="text-sm font-bold">{{ sneaker.price }} Руб․</p>
                                </div>
                                <div>
                                    <img class="cursor-pointer" src="../assets/img/close-icon.png" alt="close"
                                        @click="removeBalance(sneaker)">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <div class="flex justify-between items-center">
                        <p>Итого: </p>
                        <hr class="border border-dashed border-[#DFDFDF] w-1/2">
                        <p class="font-semibold">{{ balance }} Руб․</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <p>Налог 5%: </p>
                        <hr class="border border-dashed border-[#DFDFDF] w-1/2">
                        <p class="font-semibold">{{ Math.floor(balance * 0.05) }} Руб․</p>
                    </div>
                    <div>
                        <button @click="confirmOrder"
                            class="flex items-center justify-center gap-4 bg-[#9DD458] font-semibold w-full rounded-[18px] px-[31px] py-[17px] text-white text-[20px] mt-10">
                            Оформить заказ <span class="text-[30px]">&#8594;</span></button>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="flex flex-col justify-center items-center pt-[109px]">
                    <img src="../assets/img/success.png" alt="success">
                    <h2 class="font-semibold text-[22px] mt-[21px] mb-[9px] text-[#9DD458]">Заказ оформлен!</h2>
                    <p class="text-center text-[#9B9B9B]">Ваш заказ #18 скоро будет передан курьерской доставке</p>
                    <button @click="afterConfirm"
                        class="flex items-center justify-center gap-4 bg-[#9DD458] font-semibold rounded-[18px] px-[31px] py-[17px] text-white text-[20px] mt-10"><span
                            class="text-[30px]"> &#8592;</span> Вернуться
                        назад</button>
                </div>
            </div>
        </div>
    </div>
</template>
