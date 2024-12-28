// import RecomendationsPage from '@/views/RecomendationsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
 import HomePage from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
       name: 'home',
      component: HomePage,

    },
    {
       path: '/recomendations',
       name: 'recomendations',
       component: () => import('../views/RecomendationsView.vue'),
    },
    {
      path: '/escritos',
      name: 'escritos',
      component: () => import('../views/EscritosView.vue'),
   },

  
  ],
})

export default router
