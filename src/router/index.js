import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/dialogs',
        name: 'dialogs',
        component: () => import(/* webpackChunkName: "about" */ '../views/DialogVue.vue')
    },
    {
        path: '/messages',
        name: 'messages',
        component: () => import(/* webpackChunkName: "about" */ '../views/Messages.vue')
    },
    {
        path: '*',
        component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
