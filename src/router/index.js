import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Card from '/src/components/Card.vue'
import CommitDetails from '/src/views/CommitDetails.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Card',
        name: 'Card',
        component: Card,
    },
    {
        path: '/CommitDetails/:id',
        name: 'CommitDetails',
        component: CommitDetails,
        props: true,
    },

]



const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router

