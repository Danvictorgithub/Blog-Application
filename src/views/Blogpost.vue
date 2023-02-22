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
	margin-inline: auto auto;
	flex:1 0 auto;
	max-width: calc(1280px - 120px);
/*	background-color:lightgray;*/
}
.blogPostImg {
	width:100%;
	height: 425px;
	object-fit:cover;
}
.blogTitle {
	text-align:center;
	padding: 48px 40px;
	font-size: 3rem;
	font-weight: 600;
	letter-spacing: 2px;
	line-height: 2ch;
}
.blogContent {
	padding: 30px 10vw;
	font-size:1.5rem;
}
.blogContent::first-letter {
	font-size:3rem;
	margin-left: 2px;
}
@media (max-width:1200px){
	.blogTitle {
		font-size:2.5rem;
	}
	.wrapper-blog {
		margin-inline: auto;
/*		background-color:red;*/
	}
}
@media (max-width: 600px) {
	.blogTitle {
		font-size:2rem;
	}
}
</style>