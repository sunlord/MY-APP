import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import Login from '../views/Login.vue'

// 1. 创建路由组件
Vue.use(VueRouter)


// 2. 将路由与组件进行映射
const routes = [
  // 主路由
  {
    path: '/',
    component: Main,
    name: 'Main',
    redirect: '/home', //重定向
    children: [
      // // 子路由
      // { path: 'home', name: 'home', component: Home }, //首页
      // { path: 'user', component: User }, //用户管理
      // { path: 'mall', component: Mall }, //商品管理
      // { path: 'Page1', component: PageOne }, //商品管理
      // { path: 'Page2', component: PageTwo }, //商品管理
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

// 3. 创建router实例
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }

export default router