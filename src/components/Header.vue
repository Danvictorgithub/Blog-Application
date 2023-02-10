<script setup>
	const props = defineProps({
		title:String,
	})
</script>
<template>
	<header>
		<h1>{{title || "Blog Application"}}</h1>
		<ul class="authButtons">
			<li><a href="#">Login</a></li>	
			<li><a href="#">Sign up</a></li>	
		</ul>
	</header>
</template>
<style scoped>
	header {
		padding-inline: 24px;
		display:flex;
		justify-content:space-between;
		align-items:center;
		height:100px;
		background-color:white;
		border-bottom: 2px solid black;
	}
	header ul {
		display:flex;
		gap:12px;
		list-style:none;
	}
	header ul li a{
		text-decoration:none;
		color:black;
		font-size: 1rem;
	}
</style>