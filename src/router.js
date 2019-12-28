import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'
import SoloGame from './views/SoloGame.vue'
import History from './views/History.vue'
import MultiTop from './views/MultiTop.vue'
import MultiWait from './views/MultiWait.vue'
import MultiGame from './views/MultiGame.vue'

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
      path: '/sologame',
      name: 'sologame',
      component: SoloGame
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/multitop',
      name: 'multitop',
      component: MultiTop
    },
    {
      path: '/multiwait',
      name: 'multiwait',
      component: MultiWait
    },
    {
      path: '/multigame',
      name: 'multigame',
      component: MultiGame
    }
  ]
})
