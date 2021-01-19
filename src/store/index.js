import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 底部导航栏的状态
		selectedTab: 'index'
	},
	mutations: {
		changeSelTab(state, payload) {
			// console.log(payload)
			state.selectedTab = payload;

		}
	},
	actions: {
	},
	modules: {
	}
})
