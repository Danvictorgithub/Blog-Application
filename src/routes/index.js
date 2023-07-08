import {createRouter,createWebHistory, createWebHashHistory} from 'vue-router';
import HomeView from '../views/Home.vue';
import Blogpost from '../views/Blogpost.vue';
import notFound from '../views/404.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import New from '../views/New.vue';
import ManagePost from '../views/ManagePost.vue';
const routes = [
	{
		path:'/',
		name:'home',
		component: HomeView
	},
	{
		path:'/post/:id',
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
		path:'/createpost',
		name:'createpost',
		// beforeEnter: (to,from) => {

		// }
		component:New
	},
	{
		path:'/managepost',
		name:'managePost',
		component:ManagePost
	},
	{
		path:'/:pathMatch(.*)*',
		name:'404',
		component:notFound
	},
];
const router = createRouter({
	history:createWebHashHistory(import.meta.env.BASE_URL), //jshint ignore:line
	mode:"hash",
	routes,
});

export default router;
