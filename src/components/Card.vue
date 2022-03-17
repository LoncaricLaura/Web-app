<template>
    <div class="py-16 px-[30px] grid justify-items-center ">
        <div class="grid rounded-3xl overflow-hidden shadow-2xl w-[400px] ">
            <div div class="h-48">
                <div class="grid grid-cols-1 justify-items-center py-7">
                    <img class=" rounded-full h-[60px] w-[60px]" :src="image">
                <router-link :to="{ name: 'CommitDetails', params: { id: sha, name:name, email: email, image:image, date:date, msg: msg}}">
                    <p class="py-7  hover:text-[16px] hover:font-bold hover:text-zinc-700">{{ sha }}</p>    
                </router-link> 
                </div>
            </div>
        </div>

    </div>

</template>

<script>

export default {
    props: ["id", "name", "email", "sha", "image", "date", "msg"],
    name: "Card"
}
</script>
