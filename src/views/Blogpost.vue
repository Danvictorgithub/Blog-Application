<script setup>
	
</script>
<template>
	<section class="wrapper-blog container">
		<h1 class="blogTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
		<img class="blogPostImg" src="../assets/blogPostImage.jpg">
		<p class="blogContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde molestiae vitae odio tempora eos sapiente accusantium omnis, doloremque, ut similique obcaecati maxime odit neque consequatur provident nemo aliquam. Impedit! 
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde molestiae vitae odio tempora eos sapiente accusantium omnis, doloremque, ut similique obcaecati maxime odit neque consequatur provident nemo aliquam. Impedit!
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde molestiae vitae odio tempora eos sapiente accusantium omnis, doloremque, ut similique obcaecati maxime odit neque consequatur provident nemo aliquam. Impedit!
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde molestiae vitae odio tempora eos sapiente accusantium omnis, doloremque, ut similique obcaecati maxime odit neque consequatur provident nemo aliquam. Impedit!
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde molestiae vitae odio tempora eos sapiente accusantium omnis, doloremque, ut similique obcaecati maxime odit neque consequatur provident nemo aliquam. Impedit!
</p>
	</section>
</template>
<style scoped>
.wrapper-blog {
	margin-inline: 100px auto;
	flex:1 0 auto;
	max-width: 1280px;
/*	background-color:lightgray;*/
}
.blogPostImg {
	width:100%;
	height: 425px;
	object-fit:cover;
}
.blogTitle {
	padding: 48px 36px;
	font-size: 5rem;
	font-weight: 600;
	letter-spacing: 2px;
}
.blogContent {
	padding: 60px 64px;
	font-size:2rem;
}
@media (max-width:1280px){
	.wrapper-blog {
		margin-inline: auto;
/*		background-color:red;*/
	}
}
</style>