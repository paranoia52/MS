import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/admin'
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
    component: () => import('@/views/admin/index/Admin.vue'),
    children: [
      {
        path: '/userm',
        meta: { title: '首页', icon: 'el-icon-s-home' },
        component: () => import('@/views/admin/user/UserM.vue'),
      },
      {
        path: '/bookm',
        meta: { title: '会员管理', icon: 'el-icon-user' },
        component: () => import('@/views/admin/book/BookM.vue'),
        children: [
          {
            path: '/1',
            meta: { title: '会员列表' },
          },
          {
            path: '/2',
            meta: { title: '邀请管理' },
          },
        ]
      },
      {
        path: '/musicm',
        meta: { title: '房间管理', icon: 'el-icon-video-camera' },
        component: () => import('@/views/admin/music/MusicM.vue'),
        children: [
          {
            path: '/1',
            meta: { title: '房间列表' },
          },
        ]
      },
      {
        path: '/wallpaperm',
        meta: { title: '审核管理', icon: 'el-icon-search' },
        component: () => import('@/views/admin/wallpaper/WallpaperM.vue'),
        children: [
          {
            path: '/1',
            meta: { title: '用户审核' },
          },
          {
            path: '/2',
            meta: { title: '房间审核' },
          },
          {
            path: '/3',
            meta: { title: '实名认证' },
          },
          {
            path: '/4',
            meta: { title: '主播认证' },
          },
        ]
      },
      {
        path: '/animem',
        meta: { title: '举报管理', icon: 'el-icon-warning-outline' },
        component: () => import('@/views/admin/anime/AnimeM.vue'),
        children: [
          {
            path: '/1',
            meta: { title: '个人举报' },
          },
          {
            path: '/2',
            meta: { title: '房间举报' },
          },
          {
            path: '/3',
            meta: { title: '问题反馈' },
          },
        ]
      },
      {
        path: '/guanggao',
        meta: { title: '广告管理', icon: 'el-icon-reading' },
        children: [
          {
            path: '/1',
            meta: { title: '广告投放' },
          },
          {
            path: '/2',
            meta: { title: '公告分析' },
          },
        ]
      },
      {
        path: '/goods',
        meta: { title: '商品管理', icon: 'el-icon-sell' },
        children: [
          {
            path: '/1',
            meta: { title: '钻石列表' },
          },
        ]
      },
      {
        path: '/present',
        meta: { title: '礼物管理', icon: 'el-icon-present' },
        children: [
          {
            path: '/1',
            meta: { title: '礼物列表' },
          },
          {
            path: '/2',
            meta: { title: '送礼列表' },
          },
        ]
      },
      {
        path: '/order',
        meta: { title: '订单管理', icon: 'el-icon-document' },
        children: [
          {
            path: '/1',
            meta: { title: '充值记录' },
          },
          {
            path: '/2',
            meta: { title: '钻石明细' },
          },
          {
            path: '/3',
            meta: { title: '分成管理' },
          },
          {
            path: '/4',
            meta: { title: '余额明细' },
          },
          {
            path: '/5',
            meta: { title: '提现管理' },
          },
        ]
      },
      {
        path: '/system',
        meta: { title: '系统管理', icon: 'el-icon-setting' },
        children: [
          {
            path: '/1',
            meta: { title: '管理员列表' },
          },
          {
            path: '/2',
            meta: { title: '管理员记录' },
          },
          {
            path: '/3',
            meta: { title: '权限设置' },
          },
          {
            path: '/4',
            meta: { title: '版本管理' },
          },
          {
            path: '/5',
            meta: { title: '服务器管理' },
          },
          {
            path: '/6',
            meta: { title: '自定义配置' },
          },
        ]
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
