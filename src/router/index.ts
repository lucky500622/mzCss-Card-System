import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '@/views/Layout/index.vue'
import Home from '@/views/Layout/home.vue'
import Card from '@/views/Layout/card.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Index,
      name: 'layout-index',
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },  
        {
          path: '/card',
          name: 'card',
          component: Card
        }
      ]
    },
    
  ]
})

export default router
