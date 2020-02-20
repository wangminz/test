import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 搜索页面
    {path: '/search',component: () => import('./views/Search'), meta: { show: true } },
    // 订单页面
    {path: '/order',component: () => import('./views/Order'), meta: { show: true }  },
    // 个人详情页面
    {path: '/my',component: () => import('./views/My'), meta: { show: true }  },
     // 商品详情页面
    {path: '/detail/:id',component: () => import('./views/Detail') },
    // 登录页面
    {path: '/login',component: () => import('./views/Login') },
    // 默认页面--首页
    { path: '*',component: Home, meta: { show: true }  }
  ]
})
