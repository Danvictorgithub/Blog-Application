<script setup>
	
</script>
<template>
	<section class="wrapper-blog container">
		<div class="blogMetaData">
			<h2 class="blogAuthor">By: Some User</h2>
			<h3 class="blogDate">November 4, 2002</h3>
		</div>
		<div class=blogHero>
			<h1 class="blogTitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
			<img class="blogPostImg" src="../assets/blogPostImage.jpg">
		</div>
		<div class="blogContent">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde molestiae vitae odio tempora eos sapiente accusantium omnis, doloremque, ut similique obcaecati maxime odit neque consequatur provident nemo aliquam. Impedit! 
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde molestiae vitae odio tempora eos sapiente accusantium omnis, doloremque, ut similique obcaecati maxime odit neque consequatur provident nemo aliquam. Impedit!
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde molestiae vitae odio tempora eos sapiente accusantium omnis, doloremque, ut similique obcaecati maxime odit neque consequatur provident nemo aliquam. Impedit!
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde molestiae vitae odio tempora eos sapiente accusantium omnis, doloremque, ut similique obcaecati maxime odit neque consequatur provident nemo aliquam. Impedit!
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde molestiae vitae odio tempora eos sapiente accusantium omnis, doloremque, ut similique obcaecati maxime odit neque consequatur provident nemo aliquam. Impedit!
			</p>
		</div>
		<hr/>
		<section class="blogSection">
			<p class="likes">25 likes</p>
			<p class="numComments">2 Comments</p>
			<article class="commentSection">
				<div class="comment">
					<p class="commentAuthor">Chris Thompson</p>
					<p>This was a terrific read. I applaud your realness and vulnerability! We need more stories like this because you never know who you're inspiring and who will come behind you. Kudos to you and all that you've accomplished and WILL accomplish in the future! The lessons learned are an investment!</p>
				</div>
				<div class="comment">
					<p class="commentAuthor">Sybil Mulokwa</p>
					<p>Thanks for sharing your journey Anonymous! Can’t wait to see what you build in the next 10 years! Also, I’m a fellow entrepreneur building an edtech startup called Sparketh. Would love to chat if you’re available.</p>
				</div>
			</article>
		</section>
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
	padding: 20px 40px;
	font-size: 3rem;
	font-weight: 600;
	letter-spacing: 2px;
	line-height: 2ch;
}
.blogMetaData {
	margin-top:36px;
	display:flex;
	justify-content:flex-start;
	align-items:center;
	gap:12px;
}
.blogAuthor {
	padding: 10px 0;
	font-size:1.5rem;
	font-style:italic;
}
.blogContent {
	padding: 30px 10vw;
	font-size:1.5rem;
}
.blogContent::first-letter {
	font-size:3rem;
	margin-left: 2px;
}
.blogSection {
	padding:12px 24px;
}
.commentSection {
	border-left: 2px solid lightgray;
	padding:12px 24px;
}
.comment {
	padding: 12px 0;
}
.commentAuthor {
	font-weight:600;
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