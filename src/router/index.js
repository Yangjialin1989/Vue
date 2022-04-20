import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LatestNews from '@/components/LatestNews'
import Mine from '@/components/Mine'
import Search from '@/components/Search'
import Add from "@/components/Add";



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/latestnews',
      name: 'latestnews',
      component: LatestNews
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
  ]
})
