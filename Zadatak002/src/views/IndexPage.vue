<template>
    <div class="flex flex-col justify-center pt-16 px-48">
        <div>
            <div>
                <p class="pb-4 text-2xl">Enter your name:</p>
                <input
                    class="border-solid border-2 border-slate-400 rounded-lg h-8"
                    id="nameInput"
                    type="text"
                    v-model="this.name"
                    placeholder="Enter your name"
                />
            </div>
            <div class="pt-4 pb-28">
                <button
                    class="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-5 rounded-full"
                    @click="fetchData()"
                >
                    Click
                </button>
            </div>
        </div>
        <table class="mx-auto table border-solid border-2 border-slate-400 w-[500px]">
                <div class="grid grid-cols-3 content-center border-b-2 border-slate-300 text-[20px] font-bold bg-slate-200 h-16">
                    <div>Name</div>
                    <div>Age</div>
                    <div>Count</div>
                </div>
            <tbody class="grid grid-cols-3 my-4">
                <div v-for="age in ages" :key="age.age" :name="age.name" :count="age.count">
                    <div>{{key}}</div>
                    <div>{{age}}</div>
                    <div>{{count}}</div>
                </div>
            </tbody>
        </table>


    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'IndexPage',
    data() {
        return {
            ages: [],
            name: '',
        }
    },
    methods: {
        async fetchData() {
            axios
                .get('https://api.agify.io?name=' + this.name)
                .then((response) => {
                    this.ages = response.data
                    console.log(response.data)
                })
        },
    },
}
</script>
