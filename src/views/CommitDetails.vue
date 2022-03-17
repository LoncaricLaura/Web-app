<template>
    <div>
        <p class="pt-10 text-[#474747] text-[25px] font-bold ">Commit details</p>
        <div class="grid justify-self-start">
            <button @click="goBack">
                <img class="absolute pl-28 hover:h-[60px]" src="/src/assets/back-arrow.png"/>
            </button>
        </div>
        <div v-for="repo in repos" :key="repo.id" :sha="repo.sha" :image="repo.author.avatar_url" :name="repo.author.name">

        </div>
        <h2>{{ id }}</h2>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "CommitDetails",
    props: ["id", "name", "email", "date", "msg"],
    data() {
        return {
            repos: [],
        }
    },
    methods: {
        goBack() {
            return this.$router.go(-1);
        }
    },
    mounted() {
        axios.get('https://api.github.com/repos/vuejs/vue/commits/:id')
        .then(response => {
            this.repos = response.data.data;
            console.log(response.data);
        })
    },
}

</script>
