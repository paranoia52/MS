import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('@/views/index/Index.vue')
  },
  {
    path: '/music',
    component: () => import('@/views/music/Music.vue')
  },
  {
    path: '/wallpaper',
    component: () => import('@/views/wallpaper/WallPaper.vue')
  },
  {
    path: '/book',
    component: () => import('@/views/book/Book.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//以下代码解决路由地址重复点击的报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
