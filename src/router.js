import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'
import Game from './views/Game.vue'
import History from './views/History.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/history',
      name: 'history',
      component: History
    }
  ]
})
