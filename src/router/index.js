import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/memorycard',
        name: 'memorycard',
        component: () => import(/* webpackChunkName: "about" */ '../views/MemoryCardGame.vue')
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
    },
    {
        path: '/Have_Fun',
        name: 'Have_Fun',
        component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
    },
    {
        path: '/',
        name: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/Template.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
