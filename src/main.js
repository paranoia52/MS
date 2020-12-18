import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registryToast  } from './tool/toast' // 封装的toast
import '@/assets/icon/iconfont.css'

import '@/assets/css/common.css'

Vue.use(registryToast)
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
