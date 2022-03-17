<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from '/src/views/Home.vue'

</script>

<template>
  <section class="flex">
    <div class="flex-1 w-full bg-[url('src/assets/github.jpg')] bg-cover bg-center  h-[500px]">
      <img src="/src/assets/git-logo.png" class="mx-auto mt-[100px]">
      <h2 class="text-2xl text-white ">Get commit repositories</h2>
    </div>
  </section>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
