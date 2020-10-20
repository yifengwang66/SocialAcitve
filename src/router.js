import VueRouter from 'vue-router';
import Vue from 'vue'
import Home from './views/home'

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/movies',
        component: () => import('./views/movies'),
    },
    {
        path: '/books',
        component: () => import('./views/books'),
    },
    {
        path: '/works',
        component: () => import('./views/works'),
    },
    {
        path: '/memberInfo',
        component: () => import('./views/memberInfo'),
    },
    {
        path: '/movieDetail',
        component: () => import('./components/movieDetail')
    },
    {
        path: '/bookDetail',
        component: () => import('./components/bookDetail')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkExactActiveClass: 'link-exact-active',
    linkActiveClass: 'link-active',
})

export default router;