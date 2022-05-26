<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
    <div
        class="flex flex-col justify-center items-center bg-[url('/src/assets/background.jpg')] bg-cover bg-stone-300 bg-blend-hard-light h-[550px] top-0"
    >
        <div
            class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-amber-800 font-bold mb-6"
        >
            Books
        </div>
        <div
            class="text-3xl sm:text-3xl md:text-4xl lg:text-4xl italic text-amber-900 font-bold mb-6"
        >
            ~ GoT themed ~
        </div>
    </div>
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%t;
}
</style>
