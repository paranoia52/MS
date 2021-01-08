export const admin = {
  path: '/admin',
  meta: { title: '后台' },
  component: () => import('@/views/admin/index/Admin.vue'),
  children: [
    {
      path: '/bookm',
      meta: { title: '首页', icon: 'el-icon-s-home' },
      component: () => import('@/views/admin/book/BookM.vue'),
    },
    {
      path: '/userm',
      meta: { title: '会员管理', icon: 'el-icon-user' },
      component: () => import('@/views/admin/user/UserM.vue'),
      children: [
        {
          path: 'userList',
          meta: { title: '会员列表' },
        },
        {
          path: 'Invite',
          meta: { title: '邀请管理' },
        },
        {
          path: 'AccountLogoff',
          meta: { title: '账号注销' },
        },
      ]
    },
    {
      path: '/musicm',
      meta: { title: '房间管理', icon: 'el-icon-video-camera' },
      component: () => import('@/views/admin/music/MusicM.vue'),
      children: [
        {
          path: 'roomsList',
          meta: { title: '房间列表' },
        },
        {
          path: 'musicList',
          meta: { title: '曲库管理' },
        },
      ]
    },
    {
      path: '/wallpaperm',
      meta: { title: '审核管理', icon: 'el-icon-search' },
      component: () => import('@/views/admin/wallpaper/WallpaperM.vue'),
      children: [
        {
          path: 'userAudit',
          meta: { title: '用户审核' },
        },
        {
          path: 'roomAudit',
          meta: { title: '房间审核' },
        },
        {
          path: 'autonymSGS',
          meta: { title: '实名认证' },
        },
        {
          path: 'anchorSGS',
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
          path: 'userReport',
          meta: { title: '个人举报' },
        },
        {
          path: 'roomsReport',
          meta: { title: '房间举报' },
        },
        {
          path: 'questionReport',
          meta: { title: '问题反馈' },
        },
      ]
    },
    {
      path: '/guanggao',
      meta: { title: '广告管理', icon: 'el-icon-reading' },
      children: [
        {
          path: 'ADrelease',
          meta: { title: '广告投放' },
        },
        {
          path: 'ADAnalysis',
          meta: { title: '公告分析' },
        },
      ]
    },
    {
      path: '/goods',
      meta: { title: '商品管理', icon: 'el-icon-sell' },
      children: [
        {
          path: 'goodsList',
          meta: { title: '钻石列表' },
        },
      ]
    },
    {
      path: '/present',
      meta: { title: '礼物管理', icon: 'el-icon-present' },
      children: [
        {
          path: 'GiftList',
          meta: { title: '礼物列表' },
        },
        {
          path: 'sendGifts',
          meta: { title: '送礼列表' },
        },
      ]
    },
    {
      path: '/order',
      meta: { title: '订单管理', icon: 'el-icon-document' },
      children: [
        {
          path: 'payRecord',
          meta: { title: '充值记录' },
        },
        {
          path: 'diamond',
          meta: { title: '钻石明细' },
        },
        {
          path: 'turnoverRent',
          meta: { title: '分成管理' },
        },
        {
          path: 'remainingBalance',
          meta: { title: '余额明细' },
        },
        {
          path: 'WithdrawManage',
          meta: { title: '提现管理' },
        },
      ]
    },
    {
      path: '/system',
      meta: { title: '系统管理', icon: 'el-icon-setting' },
      component: () => import('@/views/admin/role/Role.vue'),
      children: [
        {
          path: 'AdminList',
          meta: { title: '管理员列表' },
        },
        {
          path: 'AdminRecord',
          meta: { title: '管理员记录' },
        },
        {
          path: 'permissionSet',
          meta: { title: '权限设置' },
        },
        {
          path: 'editionManage',
          meta: { title: '版本管理' },
        },
        {
          path: 'ServerManage',
          meta: { title: '服务器管理' },
        },
        {
          path: 'Custom',
          meta: { title: '自定义配置' },
        },
        {
          path: 'setRobot',
          meta: { title: '机器人配置' },
        },
        {
          path: 'apkUpload',
          meta: { title: 'apk配置' },
        },
      ]
    },
  ]
}