import Vue from 'vue'
import Router from 'vue-router'

import Register from './views/Register.vue'
import MainContainer from './views/MainContainer.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainContainer
    },
    {
      path: '/login_register',
      name: 'Register',
      component: Register
    }
  ]
})
