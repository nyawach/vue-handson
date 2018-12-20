import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../pages/Home'
import About from '../pages/About'
import Setting from '../pages/Setting'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  }, {
    path: '/about',
    component: About,
  }
]

export default new VueRouter({
  routes,
  mode: 'hash',
})
