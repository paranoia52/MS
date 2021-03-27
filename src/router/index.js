import Vue from 'vue'
import VueRouter from 'vue-router'
import { backstage } from './backstage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/backstage/Login.vue'),
  },
  {
    path: '/index',
    meta: { title: "首页" },
    component: () => import('@/views/frontend/Index.vue'),
    children: [
      {
        path: '/essay',
        meta: { title: "随笔" },
        component: () => import('@/views/frontend/essay/Essay.vue')
      },
      {
        path: '/music',
        meta: { title: "音乐" },
        component: () => import('@/views/frontend/music/index.vue')
      },
      {
        path: '/wallpaper',
        meta: { title: "壁纸" },
        component: () => import('@/views/frontend/wallpaper/index.vue')
      },
      {
        path: '/book',
        meta: { title: "书籍" },
        component: () => import('@/views/frontend/book/Book.vue')
      },
      {
        path: '/anime',
        meta: { title: "动画" },
        component: () => import('@/views/frontend/anime/Anime.vue')
      },
    ]
  },
  backstage
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 以下代码解决路由地址重复点击的报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => { // beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.matched[0].path == '/backstage' && !sessionStorage.getItem('token')) {
    next({ path: '/login' })
    alert('请先登陆')
  } else {
    next()
  }
})

export default router
