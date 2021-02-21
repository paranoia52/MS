export const admin = {
  path: '/admin',
  meta: { title: '柠檬后台' },
  component: () => import('@/views/admin/index/Admin.vue'),
  children: [
    {
      path: '/bookm',
      meta: { title: '首页', icon: 'el-icon-s-home' },
      component: () => import('@/views/admin/book/BookM.vue'),
    },
    {
      path: '/userm',
      meta: { title: '账号管理', icon: 'el-icon-user' },
      component: () => import('@/views/admin/user/UserM.vue'),
      children: [
        {
          path: 'userList',
          meta: { title: '用户管理' },
        },
        {
          path: 'operateList',
          meta: { title: '运营管理' },
        },
        {
          path: 'chattingRecords',
          meta: { title: '聊天记录' },
        },
        {
          path: 'logout',
          meta: { title: '注销处理' },
        },
        {
          path: 'groupManage',
          meta: { title: '群管理' },
        },
        {
          path: 'complain',
          meta: { title: '用户投诉' },
        },
        {
          path: 'otherComplain',
          meta: { title: '其他投诉' },
        },
      ]
    },
    {
      path: '/musicm',
      meta: { title: '社交管理', icon: 'el-icon-video-camera' },
      component: () => import('@/views/admin/music/MusicM.vue'),
      children: [
        {
          path: 'socialSquare',
          meta: { title: '社交广场' },
        },
      ]
    },
    {
      path: '/wallpaperm',
      meta: { title: '商城管理', icon: 'el-icon-search' },
      component: () => import('@/views/admin/wallpaper/WallpaperM.vue'),
      children: [
        {
          path: 'itemUpshelf',
          meta: { title: '上架商品' },
        },
        {
          path: 'orderManage',
          meta: { title: '订单管理' },
        },
        {
          path: 'timeCard',
          meta: { title: '点卡记录' },
        },
      ]
    },
    {
      path: '/animem',
      meta: { title: '数据记录', icon: 'el-icon-warning-outline' },
      component: () => import('@/views/admin/anime/AnimeM.vue'),
      children: [
        {
          path: 'cashLogs',
          meta: { title: '现金流水' },
        },
      ]
    },
    {
      path: '/payment',
      meta: { title: '支付管理', icon: 'el-icon-reading' },
      children: [
        {
          path: 'paymentSet',
          meta: { title: '支付设定' },
        },
        {
          path: 'onlineInoutcash',
          meta: { title: '线上出入款' },
        },
        {
          path: 'inoutcash',
          meta: { title: '人工出入款' },
        },
      ]
    },
    {
      path: '/action',
      meta: { title: '功能管理', icon: 'el-icon-sell' },
      children: [
        {
          path: 'lemonTeam',
          meta: { title: '柠檬助手' },
        },
        {
          path: 'lemonAide',
          meta: { title: '柠檬团队' },
        },
        {
          path: 'pushNotification',
          meta: { title: '推送通知' },
        },
        {
          path: 'systemParam',
          meta: { title: '系统参数' },
        },
        {
          path: 'controlSet',
          meta: { title: '控制设置' },
        },
        {
          path: 'blockWord',
          meta: { title: '屏蔽词' },
        },
      ]
    },
    {
      path: '/service',
      meta: { title: '客服管理', icon: 'el-icon-present' },
      children: [
        {
          path: 'serviceList',
          meta: { title: '客服列表' },
        },
        {
          path: 'advisoryClass',
          meta: { title: '资讯分类' },
        },
        {
          path: 'serviceManage',
          meta: { title: '客服绩效' },
        },
        {
          path: 'documentsList',
          meta: { title: '文案管理' },
        },
      ]
    },
    {
      path: '/countReport',
      meta: { title: '统计报表', icon: 'el-icon-document' },
      children: [
        {
          path: 'userAnalysis',
          meta: { title: '用户分析' },
        },
        {
          path: 'finance',
          meta: { title: '财务报表' },
        },
        {
          path: 'activeReport',
          meta: { title: '活动报表' },
        },
      ]
    },
    {
      path: '/operate',
      meta: { title: '运营渠道', icon: 'el-icon-document' },
      children: [
        {
          path: 'summarizing',
          meta: { title: '数据汇总' },
        },
        {
          path: 'channelManage',
          meta: { title: '渠道管理' },
        },
        {
          path: 'buriedPoint',
          meta: { title: '埋点统计' },
        },
      ]
    },
    {
      path: '/advertising',
      meta: { title: '广告管理', icon: 'el-icon-document' },
      children: [
        {
          path: 'advertisingPutIn',
          meta: { title: '广告投放' },
        },
        {
          path: 'ADreport',
          meta: { title: '广告数据' },
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
          path: 'editionManage',
          meta: { title: '版本管理' },
        },
        {
          path: 'ServerManage',
          meta: { title: '服务器管理' },
        },
      ]
    },
    {
      path: '/eleSport',
      meta: { title: '电竞管理', icon: 'el-icon-setting' },
      component: () => import('@/views/admin/role/Role.vue'),
      children: [
        {
          path: 'eleChart',
          meta: { title: '电竞概览表' },
        },
        {
          path: 'eleLibrary',
          meta: { title: '资源库' },
        },
        {
          path: 'eleManage',
          meta: { title: '资源管理' },
        },
        {
          path: 'labelManage',
          meta: { title: '标签管理' },
        },
        {
          path: 'guideManage',
          meta: { title: '引导项管理' },
        },
        {
          path: 'pushManage',
          meta: { title: '推送管理' },
        },
        {
          path: 'betStatistics',
          meta: { title: '注单统计表' },
        },
        {
          path: 'winLoseStatistics',
          meta: { title: '输赢统计表' },
        },
        {
          path: 'gameStatistics',
          meta: { title: '赛事统计表' },
        },
      ]
    }
  ]
}