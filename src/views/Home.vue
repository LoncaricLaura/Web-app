<template>
 
</template>

<script>
import axios from 'axios'


export default {
    name: "Home",
    data() {
        return {
            commits: [],
        }
    },
    mounted() {
        axios.get('https://api.github.com/repos/vuejs/vue/commits')
        .then(response => {
            this.commits = response.data.data;
            console.log(response.data);
        })
    },
}

</script>
