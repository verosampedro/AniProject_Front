import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/anime/:animeId',
      name: 'AnimeDetails',
      component: () => import('../views/DetailView.vue'),
      props: true
    },
    {
      path: '/anime/:animeId/characters',
      name: 'AnimeCharacters',
      component: () => import('../views/CharacterView.vue'),
      props: true
        },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/requests',
      name: 'requests',
      component: () => import('../views/RequestsView.vue'),
      props: true
    },
  ]
})

export default router
