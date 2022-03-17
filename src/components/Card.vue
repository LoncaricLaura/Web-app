<template>
    <div class="py-16 px-[30px] grid justify-items-center ">
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 rounded-3xl overflow-hidden shadow-2xl w-[200px] sm:w-[300px] md:w-[400px]">
            <div div class="h-48">
                <div class="grid justify-items-center py-7">
                    <img class="rounded-full h-[60px] w-[60px]" :src="image">
                    <h3 class="py-7">{{ sha }}</h3>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    props: ["id", "sha", "image"],
    name: "Card"
}
</script>
