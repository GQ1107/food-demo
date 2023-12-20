import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: ()=>import('@/views/HomeView')
  },
  {
    path: '/detail',
    name: 'FoodDetail',
    component: ()=>import('@/views/FoodDetail')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
