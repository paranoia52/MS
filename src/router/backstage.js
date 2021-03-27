import Home from "@/views/backstage/Home.vue"
import BlankPage from "@/views/blank/BlankPage.vue"
export const backstage = {
  path: '/backstage',
  meta: { title: '' },
  component: BlankPage,
  children: [
    {
      path: '/home',
      meta: { title: '首页', icon: 'el-icon-s-home' },
      component: Home,
    },
    {
      path: '/userm',
      meta: { title: '账号管理', icon: 'el-icon-user' },
      component: Home,
      children: [
        {
          path: 'userList',
          meta: { title: '用户管理' },
          component: () => import('@/views/backstage/user/index.vue'),
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
      meta: { title: '社交管理', icon: 'el-icon-chat-line-square' },
      component: Home,
      children: [
        {
          path: 'socialSquare',
          meta: { title: '社交广场' },
          component: () => import('@/views/backstage/music/MusicM.vue'),
        },
      ]
    },
    {
      path: '/wallpaperm',
      meta: { title: '商城管理', icon: 'el-icon-shopping-cart-full' },
      component: Home,
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
      meta: { title: '数据记录', icon: 'el-icon-tickets' },
      component: Home,
      children: [
        {
          path: 'cashLogs',
          meta: { title: '现金流水' },
        },
      ]
    },
    {
      path: '/payment',
      meta: { title: '支付管理', icon: 'el-icon-sold-out' },
      component: Home,
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
      meta: { title: '功能管理', icon: 'el-icon-s-operation' },
      component: Home,
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
      meta: { title: '客服管理', icon: 'el-icon-service' },
      component: Home,
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
      meta: { title: '统计报表', icon: 'el-icon-s-data' },
      component: Home,
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
      meta: { title: '运营渠道', icon: 'el-icon-data-analysis' },
      component: Home,
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
      meta: { title: '广告管理', icon: 'el-icon-truck' },
      component: Home,
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
      component: Home,
      children: [
        {
          path: 'AdminList',
          meta: { title: '管理员列表' },
          component: () => import('@/views/backstage/role/Role.vue'),
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
      meta: { title: '电竞管理', icon: 'el-icon-s-data' },
      component: Home,
      children: [
        {
          path: 'eleChart',
          meta: { title: '电竞概览表' },
          component: () => import('@/views/backstage/eleSport/eleChart.vue')
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