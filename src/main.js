import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入mint-ui
import MintUi from 'mint-ui'
//导入mint-ui样式文件
import 'mint-ui/lib/style.min.css'
// 引入axios
import axios from 'axios'
// 引入页脚组件
import MyFooter from './components/MyFooter.vue';
//注册MintUi为插件
Vue.use(MintUi)
Vue.config.productionTip = false
Vue.component("my-footer", MyFooter)
// 配置axios
axios.defaults.baseURL = '/api'
Vue.prototype.axios = axios

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
