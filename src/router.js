import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Home from './views/Home.vue'
import Post from './views/Post.vue'
import Blog from './views/Blog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/blog/:uid',
      name: 'post',
      component: Post
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
