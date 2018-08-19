import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login'
import home from '@/components/home'
import user from '@/components/user'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/bb',
          component: home
        },
        {
          path: '/user',
          component: user
        }
      ]
    },
    {
      path: '/index',
      component: home
    },
    {
      path: '/user',
      component: user
    },
    {path: '/', redirect: 'login'}
  ]
})
//路由跳转之前
router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !localStorage.token) {
    return next('/login')
  }
   next()
})

export default router
