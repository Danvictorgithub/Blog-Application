<script setup>
	import {ref} from 'vue';
	import { RouterLink } from 'vue-router';
	import { useAuthenticationStore } from '../../data/state';
	import { useRouter } from 'vue-router';
	const router = useRouter();
	const drawerIcon = '../icons/nav-drawer-icon.png';
	const props = defineProps({
		title:String,
		// hide:{type:Boolean,default:false},
	});
	const AuthStore = useAuthenticationStore();
	const menuToggle = ref('false');
	function logout() {
		localStorage.clear();
		AuthStore.setIsLoggedIn(false);
		router.push('/');
	}
</script>
<template>
	<header>
		<h1><RouterLink to="/"><img class="icon" src="/favicon.png">{{title || "Blog Application"}}</RouterLink></h1>
		<button v-if="!(AuthStore.isLoggedIn)" @click="menuToggle = !menuToggle" class="hideToggle menuDrawer">
			<span class="material-symbols-outlined menuDrawer">menu</span>
		</button>
		<ul v-if="!(AuthStore.isLoggedIn)" :class="{on:menuToggle}" class="authButtons">
			<RouterLink to="/login">Login</RouterLink>
			<RouterLink to="/signup">Signup</RouterLink>
		</ul>
		<button v-if="AuthStore.isLoggedIn" @click="menuToggle = !menuToggle" class="hideToggle menuDrawer">
			<span class="material-symbols-outlined menuDrawer">menu</span>
		</button>
		<ul v-if="AuthStore.isLoggedIn" :class="{on:menuToggle}" class="authButtons">
			<p>{{ AuthStore.username }}</p>
			<RouterLink to="/createpost">Create Post</RouterLink>
			<RouterLink to="/managepost">Manage Post</RouterLink>
			<button @click="logout">Log Out</button>
		</ul>
	</header>
</template>
<style scoped>
	.icon {
		width: 65px;
	}
	header {
		padding-inline: 24px;
		display:flex;
		justify-content:space-between;
		align-items:center;
		height:75px;
		width:100%;
		background-color:white;
		border-bottom: 1px solid lightgray;
		z-index: 1;
	}
	header h1 a{
		height:100%;
		display:flex;
		align-items:center;
		padding:4px;
		gap:12px;
		letter-spacing:2px;
		text-transform:uppercase;
		text-decoration: none;
		color:var(--matte-black);
		line-height:25px;
	}
	header ul {
		display:flex;
		flex-direction:row;
		gap:48px;
		list-style:none;
		padding: 0;
		justify-content: center;
		align-items: center;
		transition-property: display;
		transition-duration: 0.5s;
		transition-timing-function: ease-out;
		transition-delay: 0.25s;
	}
	header ul > *{
		/* width:100%; */
		text-decoration:none;
		color:var(--matte-black);
		font-size: 1.5rem;
	}
	.hideToggle {
		display:none;
	}
	button {
		background-color: white;
		border:0;
		font-weight: 375;
	}
	@media (max-width:600px) {
		header {
			padding-inline: 12px;
			font-size:0.8rem;
		}
		header h1 {
			letter-spacing:1px;
		}
		header ul {
			width:100%;
			height:125px;
			flex-direction:column;
			align-items:center;
			justify-content:center;
			position:absolute;
			top:75px;
			left:0;
			gap:0;
			background-color: rgb(224, 224, 224,0.9);
			border-radius: 0  0 5% 5%;
		}
		header ul a {
			flex: 1 0 auto;
			display:flex;
			justify-content:center;
			align-items:center;
			color:var(--matte-black);
/*			font-weight:800;*/
/*			font-size:1.25rem;*/
			border-bottom:2px solid white;
		}
		.hideToggle {
			display:block;
		}
		.on {
			display:none;
			opacity:0;
		}
		.menuDrawer {
			background-color:white;
			border:0;
	/*		display:flex;*/
	/*		position:relative;*/
		}
		.drawerIcon {
			flex-shrink: 1;
			width: 100%;
			max-width: 65px;
			height: auto;
			border-radius:100%;
			background-color:white;
	/*		position:relative;*/
	/*		height:inherit;*/
		}
		.drawerIcon:hover {
			background-color:lightgray;
		}
		.drawerIcon:active {
			background-color:gray;
		}
	}
</style>
