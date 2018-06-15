import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Second from './views/second.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: Index
    },
    {
      path: '/second',
      name: 'second',
      meta: {
        title: '第二页'
      },
      component: Second
    }
  ]
})

export default router
