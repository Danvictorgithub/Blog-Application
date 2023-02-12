import {createRouter,createWebHistory} from 'vue-router';
import HomeView from '../views/Home.vue';

const routes = [
	{
		path:'/',
		name:'home',
		component: HomeView
	},
];
const router = createRouter({
	history:createWebHistory(import.meta.env.BASE_URL), //jshint ignore:line
	routes,
});

export default router;