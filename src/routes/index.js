import {createRouter,createWebHistory} from 'vue-router';
import HomeView from '../views/Home.vue';
import Blogpost from '../views/Blogpost.vue';
import notFound from '../views/404.vue';
const routes = [
	{
		path:'/',
		name:'home',
		component: HomeView
	},
	{
		path:'/:pathMatch(.*)*',
		name:'404',
		component:notFound
	},
	{
		path:'/blogPost',
		name:'blogPost',
		component:Blogpost
	},
];
const router = createRouter({
	history:createWebHistory(import.meta.env.BASE_URL), //jshint ignore:line
	routes,
});

export default router;