<template>
    <div>
        <p class="pt-10 text-[#474747] text-[25px] font-bold ">Commit details</p>
        <div class="grid justify-self-start">
            <button @click="goBack">
                <img class="absolute pl-8 md:pl-28 hover:h-[60px]" src="/src/assets/back-arrow.png"/>
            </button>
        </div>
 
    <div class="py-16 px-[30px] grid justify-items-center ">
        <div class="grid rounded-3xl overflow-hidden shadow-2xl w-[400px] md:w-[1000px]">
            <div div class="md:h-[330px] ">
                <div class="grid grid-cols-1 justify-items-center py-7">
                    <img class=" rounded-full h-[60px] w-[60px]" :src="image">
                    <p class="pt-7 text-[16px] font-bold hover:text-zinc-700">{{ name }} <br> {{ email }}</p>    
                </div>
                <div class="grid grid-rows-2 md:grid-cols-2 justify-center md:px-16 text-left mx-[20px] md:space-x-28">
                    <p class="mb-[10px]"><b>Commit message:</b><br> {{ msg }}</p>
                    <p><b>Date:</b><br> {{ date }}</p>

                </div>
            </div>
        </div>

    </div>


    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "CommitDetails",
    props: ["id", "name", "email", "date", "msg", "image"],
  /*  data() {
        return {
            repos: [],
        }
    }, */
    methods: {
        goBack() {
            return this.$router.go(-1);
        }
    },
     mounted() {
        axios.get('https://api.github.com/repos/vuejs/vue/commits/:id')
        .then(response => {
            this.repos = response.data;
            console.log(response.data);
        })
    }, 
}

</script>
