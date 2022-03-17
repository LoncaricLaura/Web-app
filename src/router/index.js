import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Card from '/src/components/Card.vue'
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

]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router