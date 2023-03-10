import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: './calculator',
      name: 'calculator',
      component: HomeView
    },
    {
      path: './app',
      name: 'app',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../App.vue')
    },
    {
      path: './converter',
      name: 'Converter',
    }
  ]
})

export default router
