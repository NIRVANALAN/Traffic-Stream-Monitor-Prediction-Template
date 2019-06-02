import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
// import App from '@/App'
import Index from '@/components/Index'
import Login from '@/components/Login'
// import register from '@/components/Register'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index, // 这里应该写别的app吧 TODO
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    // {
    //     path: '/register',
    //     name: "Register",
    //     component: Register
    // }
]

var router = new VueRouter({
    routes
})
export default router;