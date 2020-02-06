import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 搜索页面
    {path: '/search',component: () => import('./views/Search') },
    // 订单页面
    {path: '/order',component: () => import('./views/Order') },
    // 个人详情页面
    {path: '/my',component: () => import('./views/My') },
     // 商品详情页面
    {path: '/detail',component: () => import('./views/Detail') },
    // 默认页面--首页
    { path: '*',component: Home }
  ]
})
