import Vue from 'vue'
import VueRouter from 'vue-router'

import Contact from './components/Contact.vue'
import About from './components/About.vue'
import UserSearch from './components/UserSearch.vue'
import User from './components/User.vue'

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			name: 'about',
			path: '/about',
			component: About,
			children: [
				{
					name: 'about.search',
					path: 'user/search/:phone',
					component: UserSearch,
					props: route => ({
						selectRouteFn: userId => `/about/user/edit/${userId}`,
						backRoute: '/about',
						phone: route.params.phone
					})
				},
				{
					path: 'user/edit/:id',
					component: User,
					props: route => ({
						backRoute: '/about',
						id: route.params.id
					})
				},
				{
					path: 'user/add',
					component: User,
					props: {
						backRoute: '/about'
					}
				}
			]
		},
		{
			name: 'contact',
			path: '/contact',
			component: Contact,
			children: [
				{
					name: 'contact.search',
					path: 'user/search/:phone',
					component: UserSearch,
					props: route => ({
						selectRouteFn: userId => `/contact/user/edit/${userId}`,
						backRoute: '/contact',
						phone: route.params.phone
					})
				},
				{
					path: 'user/edit/:id',
					component: User,
					props: route => ({
						backRoute: '/contact',
						id: route.params.id
					})
				},
				{
					path: 'user/add',
					component: User,
					props: {
						backRoute: '/contact'
					}
				}
			]
		}
	]
});

export default router