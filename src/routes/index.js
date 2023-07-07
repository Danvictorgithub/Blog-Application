import {createRouter,createWebHistory} from 'vue-router';
import HomeView from '../views/Home.vue';
import Blogpost from '../views/Blogpost.vue';
import notFound from '../views/404.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
const routes = [
	{
		path:'/',
		name:'home',
		component: HomeView
	},
	{
		path:'/blogPost',
		name:'blogPost',
		component:Blogpost
	},
	{
		path:'/login',
		name:'login',
        component:Login
	},
	{
		path:'/signup',
		name:'signup',
		component:Signup
	},
	{
		path:'/:pathMatch(.*)*',
		name:'404',
		component:notFound
	},
];
const router = createRouter({
	history:createWebHistory(import.meta.env.BASE_URL), //jshint ignore:line
	routes,
});

export default router;
