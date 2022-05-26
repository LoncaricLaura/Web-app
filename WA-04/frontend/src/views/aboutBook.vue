<template>
    <div class="flex justify-center py-16">
        <button @click="goBack" class="absolute flex left-0 ml-32 p-2">
            <img src="/src/assets/back_arrow.jpg" class="h-16 hover:h-[70px]" />
        </button>
        <div
            class="flex flex-col m-8 p-12 h-[450px] w-[350px] sm:w-[430px] md:w-[630px] lg:w-[830px] bg-amber-800 bg-opacity-30 shadow-[0_35px_77px_-17px_rgba(0,0,0,0.64)]"
        >
            <div class="text-2xl sm:text-3xl md:text-4xl font-bold">
                {{ name }}
            </div>
            <div class="my-4 text-lg italic sm:text-lg md:text-xl">
                {{ author }}
            </div>
            <div class="my-2 text-lg italic sm:text-lg md:text-xl">
                {{ isbn }}
            </div>
            <div class="my-2 text-lg italic sm:text-lg md:text-xl">
                Number of pages: {{ pages }}
            </div>
            <div class="my-2 text-lg italic sm:text-lg md:text-xl">
                Publisher: {{ publisher }}
            </div>
            <div class="my-2 text-lg italic sm:text-lg md:text-xl">
                {{ country }}
            </div>
            <div class="my-2 text-lg italic sm:text-lg md:text-xl">
                Number of characters: {{ characters }}
            </div>
            <div class="my-12 text-lg">{{}}</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'aboutBook',
    props: [
        'name',
        'author',
        'isbn',
        'pages',
        'publisher',
        'country',
        'characters',
    ],
    methods: {
        goBack() {
            return this.$router.go(-1)
        },
    },
}
</script>
