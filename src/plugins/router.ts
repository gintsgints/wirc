import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentUser } from '~/logic/user'
import Home from '~/views/Home.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: () => import('../views/Login.vue') },
    { path: '/register', component: () => import('../views/Register.vue') },
    { path: '/me', component: () => import('../views/Me.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    if (to.path !== '/login' && to.path !== '/register' && !await getCurrentUser()) next('login')
    else next()
})

export default router