<script setup>
	import {ref} from 'vue';
	const drawerIcon = '/icons/nav-drawer-icon.png';
	const props = defineProps({
		title:String,
	})
	const menuToggle = ref('false');
</script>
<template>
	<header>
		<h1><img class="icon" src="favicon.png">{{title || "Blog Application"}}</h1>
		<button @click="menuToggle = !menuToggle" class="hideToggle menuDrawer"><img class="drawerIcon" src="./icons/nav-drawer-icon.png" alt="Button"></button>
		<ul :class="{on:menuToggle}" class="authButtons">
			<a href=""><li>Login</li></a>
			<a href=""><li>Signup</li></a>
		</ul>
	</header>
</template>
<style scoped>
	.icon {
		height: 100%;
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
	header h1 {
		height:100%;
		display:flex;
		align-items:center;
		padding:4px;
		gap:12px;
		letter-spacing:2px;
		text-transform:uppercase;
	}
	header ul {
		display:flex;
		flex-direction:row;
		gap:48px;
		list-style:none;
		padding: 0;

		transition-property: display;
		transition-duration: 0.5s;
		transition-timing-function: ease-out;
		transition-delay: 0.25s;
	}
	header ul a{
		width:100%;
		text-decoration:none;
		color:black;
		font-size: 1.5rem;
	}
	.hideToggle {
		display:none;
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
			background-color:black;
		}
		header ul a {
			flex: 1 0 auto;
			display:flex;
			justify-content:center;
			align-items:center;
			color:white;
			font-weight:800;
			font-size:1.25rem;
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
	/*		position:relative;*/
	/*		height:inherit;*/
		}
	}
</style>