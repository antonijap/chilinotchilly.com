import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
