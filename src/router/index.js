import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Game from '../views/GameView.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/game', component: Game }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
