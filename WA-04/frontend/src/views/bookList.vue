<template>
    <div
        class="flex flex-col justify-center py-16 px-[25px] md:px-[50px] lg:px-[140px]"
    >
        <div class="text-4xl text-amber-800 pb-16">LIST OF BOOKS</div>
        <div
            class="grid grid-cols sm:grid-cols md:grid-cols lg:grid-cols xl:grid-cols-2"
        >
            <bookCard
                v-for="book in books"
                :key="book.isbn"
                :name="book.name"
                :isbn="book.isbn"
                :author="book.authors[0]"
                :pages="book.numberOfPages"
                :publisher="book.publisher"
                :country="book.country"
                :characters="book.characters.length"
            />
        </div>
    </div>
</template>

<script>
import bookCard from '/src/components/bookCard.vue'

import axios from 'axios'
export default {
    name: 'bookList',
    data() {
        return {
            books: [],
        }
    },
    components: {
        bookCard,
    },
    async mounted() {
        await axios.get('http://localhost:8080/books').then((response) => {
            this.books = response.data
            console.log(response.data)
        })
    },
}
</script>
