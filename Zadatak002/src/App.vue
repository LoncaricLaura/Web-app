<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Index from './views/IndexPage.vue'
</script>

<template>
  <section class="flex">
    <div class="flex justify-center w-full bg-gradient-to-b from-slate-700 to-slate-300 h-[300px]">
      <div class="fixed pt-12">
        <img src="/src/assets/logo.png" class="h-28"></div>
      <div>
          <h2 class="pt-48 px-8 text-3xl text-slate-800 font-bold">Sending requests and displaying them in a table</h2>
        </div>
    </div>

  </section>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
