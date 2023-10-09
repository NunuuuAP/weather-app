import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HourView from '@/views/HourView.vue'
import WeekView from '@/views/WeekView.vue'
import SubscriptionView from '@/views/SubscriptionView.vue'

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
    }
    ,
    {
      path: '/subscription',
      name: 'subscription',
      component: SubscriptionView
    }
  ]
})

export default router
