import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
import About from '@/views/about'
import LoadMore from '@/views/mint/loadMore'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/loadmore',
      name: 'LoadMore',
      component: LoadMore
    }
  ]
})
