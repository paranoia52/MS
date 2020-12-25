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
    meta: { title: "首页" },
    component: () => import('@/views/stage/Index.vue'),
    children: [
      // {
      //   path: '/',
      //   redirect: '/anime'
      // },
      {
        path: '/anime',
        meta: { title: "动画" },
        component: () => import('@/views/stage/anime/Anime.vue')
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
    ]
  },
  {
    path: '/admin',
    meta: { title: '后台' },
    component: () => import('@/views/admin/Admin.vue'),
    children: [
      {
        path: '/userm',
        meta: { title: '首页', icon: 'icon-home' },
        component: () => import('@/views/admin/user/UserM.vue'),
      },
      {
        path: '/bookm',
        meta: { title: '会员管理', icon: 'icon-person2' },
        component: () => import('@/views/admin/book/BookM.vue'),
      },
      {
        path: '/musicm',
        meta: { title: '房间管理', icon: 'icon-folder' },
        component: () => import('@/views/admin/music/MusicM.vue'),
      },
      {
        path: '/wallpaperm',
        meta: { title: '审核管理', icon: 'icon-search' },
        component: () => import('@/views/admin/wallpaper/WallpaperM.vue'),
      },
      {
        path: '/animem',
        meta: { title: '系统管理', icon: 'icon-sitting' },
        component: () => import('@/views/admin/anime/AnimeM.vue'),
      },
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/admin/Login.vue'),
  }
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
router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
