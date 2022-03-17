<template>
    <div class="pt-10">
        <p class="text-[#474747] text-[25px] font-bold ">SHA commits</p>
        <Card v-for="repo in repos" :key="repo.id" :sha="repo.sha" :image="repo.author.avatar_url" />
    </div>
</template>

<script>
import axios from 'axios'
import Card from '/src/components/Card.vue'


export default {
    name: "Home",
    data() {
        return {
            repos: [],
        }
    },
    components: {
        Card,
    },
    mounted() {
        axios.get('https://api.github.com/repos/vuejs/vue/commits')
        .then(response => {
            this.repos = response.data;
            console.log(response.data);
        })
    },
}

</script>
