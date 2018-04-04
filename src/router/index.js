import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import Contact from '@/components/Contact'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
