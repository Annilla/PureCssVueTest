import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PureCss from './views/PureCss.vue'
import Data from './views/Data.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  fallback: false, // Setting this to false essentially makes every router-link navigation a full page refresh in IE9.
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/purecss',
      name: 'purecss',
      component: PureCss
    },
    {
      path: '/data',
      name: 'data',
      component: Data
    }
  ]
})
