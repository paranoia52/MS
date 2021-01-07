import Vue from 'vue'
import VueRouter from 'vue-router'
import { admin } from './admin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/admin'
  },
  {
    path: '/login',
    component: () => import('@/views/admin/Login.vue'),
  },
  {
    path: '/index',
    meta: { title: "首页" },
    component: () => import('@/views/stage/Index.vue'),
    children: [
      {
        path: '/essay',
        meta: { title: "随笔" },
        component: () => import('@/views/stage/essay/Essay.vue')
      },
      {
        path: '/music',
        meta: { title: "音乐" },
        component: () => import('@/views/stage/music/Music.vue')
      },
      {
        path: '/wallpaper',
        meta: { title: "壁纸" },
        component: () => import('@/views/stage/wallpaper/WallPaper.vue')
      },
      {
        path: '/book',
        meta: { title: "书籍" },
        component: () => import('@/views/stage/book/Book.vue')
      },
      {
        path: '/anime',
        meta: { title: "动画" },
        component: () => import('@/views/stage/anime/Anime.vue')
      },
    ]
  },
  admin
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
  if (to.matched[0].path == '/admin' && !sessionStorage.getItem('token')) {
    next({ path: '/login' })
    alert('请先登陆')
  } else {
    next()
  }
})

export default router
