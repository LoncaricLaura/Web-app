import { createRouter, createWebHistory } from 'vue-router'
import bookList from '/src/views/bookList.vue'
import aboutBook from '/src/views/aboutBook.vue'

const routes = [
    {
        path: '/',
        name: 'bookList',
        component: bookList,
    },
    {
        path: '/aboutBook/:isbn',
        name: 'aboutBook',
        component: aboutBook,
        props: true,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
