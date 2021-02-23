import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Shop" */ '../views/Shop.vue')
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () =>
      import(/* webpackChunkName: "Details" */ '../views/Details.vue')
  },
  {
    path: '/translation',
    name: 'Translation',
    component: () =>
      import(/* webpackChunkName: "Translation" */ '../views/Translation.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
