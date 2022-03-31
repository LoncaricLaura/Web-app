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

        <table
            class="grid justify-items-center mx-auto border-solid border-2 border-slate-400 rounded-md w-full"
        >
            <thead
                class="grid content-center w-full border-b-2 border-slate-300 text-[20px] font-bold bg-slate-200 h-16"
            >
                <tr class="grid grid-cols-6">
                    <th class="">Name</th>
                    <th class="">Age</th>
                    <th class="">Probability g</th>
                    <th class="">Gender</th>
                    <th class="">Country</th>
                    <th class="">Probability c</th>
                </tr>
            </thead>
            <tbody class="grid content-center h-32 px-8">
                <tr class="grid grid-cols-6 gap-[100px]">
                    <td>
                        <div v-for="age in ages" :key="age.name">
                            {{ age.name }}
                        </div>
                    </td>
                    <td>
                        <div v-for="age in ages" :key="age.name">
                            {{age.age}}
                            </div>
                    </td>
                    <td>
                        <div v-for="gender in genders" :key="gender.name">
                            {{gender.probability}}
                            </div>
                    </td>
                    <td>
                        <div v-for="gender in genders" :key="gender.name">
                            {{gender.gender}}
                            </div>
                    </td>
                     <td>
                        <div  v-for="item in countries.country" :key="item.id">
                            {{ item.country_id }}
                        </div>
                    </td>
                    <td>
                        <div v-for="item in countries.country" :key="item.name">
                            {{item.probability}}
                            </div>
                    </td>

                </tr>
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
            genders: [],
            countries: [],
            name: '',
        }
    },
    methods: {
        async fetchData() {
            const promise1 = await axios.get('https://api.agify.io?name=' + this.name)
            console.log(promise1.data);
            const promise2 = await axios.get('https://api.genderize.io?name=' + this.name)
            console.log(promise2.data);
            const promise3 = await axios.get('https://api.nationalize.io?name=' + this.name)
            console.log(promise3.data);

            await axios.all([promise1, promise2, promise3])
                this.ages = promise1,
                this.genders = promise2,
                this.countries = promise3.data

           /* Promise.all([
                fetch('https://api.agify.io?name=' + this.name),
                fetch('https://api.genderize.io?name=' + this.name),
                fetch('https://api.nationalize.io?name=' + this.name),
            ])
                .then((responses) => {
                    return Promise.all(
                        responses.map((response) => {
                            this.answers = response.json()
                            return this.answers
                        })
                    )
                })
                .then((data) => {
                    this.answers = data
                    console.log(data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },*/
        }
    },
}
</script>
