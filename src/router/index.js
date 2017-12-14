import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Monitor from '@/views/Monitor'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      meta: {
        title: '首页'
      },
       component: Home
    },
    {
      path: '/Monitor',
      name: 'Monitor',
      meta: {
        title: '首页'
      },
       component: Monitor
    },
  ]
})
