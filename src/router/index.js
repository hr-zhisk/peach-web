import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Index',
		component: Index
	},
	{
		path: '/discover',
		name: 'Discover',
		component: () => import(/* webpackChunkName: "about" */ '../views/Discover.vue')
	},
	{
		path: '/issue',
		name: 'Issue',
		component: () => import(/* webpackChunkName: "about" */ '../views/Issue.vue')
	},
	{
		path: '/me',
		name: 'Me',
		component: () => import(/* webpackChunkName: "about" */ '../views/Me.vue')
	},
	{
		path: '/login',
		name: 'Login',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import(/* webpackChunkName:"about" */ '../views/Register.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
