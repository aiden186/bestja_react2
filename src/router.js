import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Store from './views/store'
import ComingSoon from './views/coming-soon'
import Store1 from './views/store1'
import Profile from './views/profile'
import Home from './views/home'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Store',
      path: '/store',
      component: Store,
    },
    {
      name: 'ComingSoon',
      path: '/coming-soon',
      component: ComingSoon,
    },
    {
      name: 'Store1',
      path: '/store1',
      component: Store1,
    },
    {
      name: 'Profile',
      path: '/profile',
      component: Profile,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
  ],
})
