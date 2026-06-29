import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '@/views/Layout/index.vue'
import Home from '@/views/Layout/home.vue'

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
          component: Home
        }
      ]
    },
    
  ]
})

export default router
