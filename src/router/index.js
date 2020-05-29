import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Popular from '../views/sub/Popular.vue'

Vue.use(VueRouter)

  const routes = [
	{
    	path: '/',
		component: Home,
		children: [
			{
				path: '', component: Popular, name: 'Pop'
			},
		]
  	},
	{
    	path: '/category/:name/',
		props: true,
		children: [
			{
				path: '', 
				component: Popular, 
				name: 'Popular'
			},
		],
    	component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue')
	},
	{
		path: '/single/:id',
		props: true,
		children: [
			{
				path: '',
				component: Popular,
				name: 'Popul'
			},
		],
		component: () => import(/* webpackChunkName: "single" */ '../views/Single.vue')
	}
]

const router = new VueRouter({
  	mode: 'history',
  	base: process.env.BASE_URL,
  	routes
})

export default router
