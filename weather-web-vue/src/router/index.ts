import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HourView from '@/views/HourView.vue'
import AuthView from '@/views/AuthView.vue'
import WeekView from '@/views/WeekView.vue'
import ThemeView from '@/views/ThemeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hourly',
      name: 'hourly',
      component: HourView
    },
    {
      path: '/weekly',
      name: 'weekly',
      component: WeekView
    },
    {
      path: '/theme',
      name: 'theme',
      component: ThemeView
    }/*,
    {
      name: 'auth',
      path: '/auth',
      component: AuthView,
    },*/
  ]
})

export default router
