import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import Layout from '@/pages/base/layout'

Vue.use(Router)

// 设置默认路由
let defaultRouter = [

]
// 设置其他角色路由
let routerMap = {

}

// 设置通用路由
let routerArr = [
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/index',
    component: Layout,
    children: [
      {
        path: '/',
        component: resolve => {
          require(['@/components/home'], resolve)
        }
      },
      {
        path: '/first',
        component: resolve => {
          require(['@/pages/first/first'], resolve)
        }
      },
      {
        path: '/second1',
        component: resolve => {
          require(['@/pages/second/second1'], resolve)
        }
      },
      {
        path: '/second2',
        component: resolve => {
          require(['@/pages/second/second2'], resolve)
        }
      }
    ]
  },
  {path: '/', redirect: 'login'}
]
const router = new Router({
  mode: 'history',
  routes: routerArr
})
//路由跳转之前
// router.beforeEach((to, from, next) => {
//   if (to.path !== '/login' && !localStorage.token) {
//     return next('/login')
//   }
//    next()
// })

export default router
