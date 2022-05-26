<template>
    <div class="flex flex-row justify-center">
        <div class="flex">
            <router-link
                :to="{
                    name: 'aboutBook',
                    params: {
                        isbn: isbn,
                        author: author,
                        name: name,
                        pages: pages,
                        publisher: publisher,
                        country: country,
                        characters: characters,
                    },
                }"
            >
                <div
                    class="flex flex-col cursor-pointer m-12 p-12 h-350px] w-[350px] sm:[430px] md:w-[630px] lg:w-[700px] bg-amber-800 bg-opacity-30 transition-all duration-500 ease-out hover:scale-[1.05] shadow-[0_35px_77px_-15px_rgba(0,0,0,0.44)] hover:shadow-[0_35px_77px_-17px_rgba(0,0,0,0.64)]"
                >
                    <div class="text-2xl sm:text-3xl md:text-4xl font-bold">
                        {{ name }}
                    </div>
                    <div class="my-6 text-lg italic sm:text-lg md:text-xl">
                        {{ author }}
                    </div>
                    <div class="my-12 text-lg">{{ isbn }}</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bookList',
    props: [
        'name',
        'author',
        'isbn',
        'pages',
        'publisher',
        'country',
        'characters',
    ],
}
</script>
