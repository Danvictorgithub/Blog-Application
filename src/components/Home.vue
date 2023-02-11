<script setup>
	
</script>
<template>
	<section class="wrapper container">
		<div class="homeHero">
			<div class="gradient">
				<section class="blogHeroInfo">
				<article>
					<h2>
						Blog Title
					</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam velit nihil eos nam, odio harum, quae quidem amet sunt facere vel non eligendi minima laborum assumenda soluta hic porro.</p>
					<button class="readBlogPost">Read Blog</button>
				</article>
			</section>
			</div>
			<img class="heroImg" src="../assets/steve.jpg">
		</div>
	</section>
</template>
<style scoped>
	.homeHero {
		height: 600px;
		position:relative;
/*		background-color:black;*/
		overflow:hidden;
	}
	.gradient {
		width:100%;
		height:100%;
		position:absolute;
  		display:inline-block;
  		background: linear-gradient(to right, transparent,rgb(0,0,0,0.85),black);
	}
	.heroImg {
/*		width:100%;*/
		height:100%;
	}
	.blogHeroInfo{
		height:100%;
		color:white;
		display:grid;
		justify-content:center;
		align-items:center;
		grid-template-columns: 1fr 1fr;
	}
	.blogHeroInfo article {
		padding:24px;
		color:white;
		grid-column: 2 / 3;
	}
	.blogHeroInfo article h2{
		font-size:2rem;
		font-weight:bold;
		color: white;
	}
	.blogHeroInfo article p {
		font-size:1.25rem;
		margin-bottom:12px;
	}
	.blogHeroInfo article button {
		background-color:white;
		border:2px solid transparent;
		font-size:1.5rem;
		padding:20px 40px;
		font-weight: bold;
		color:var(--matte-black);
	}
	.wrapper {
		flex: 1 0 auto;
		max-width: 1280px;
  }
	.container {
		width:100%;
		margin: 0 auto;
		background-color: white;
	}
	@media (max-width:768px) {
		.blogHeroInfo {
			grid-template-columns: 1fr;
			grid-template-rows: 0fr 1fr;
		}
		.blogHeroInfo article {
			text-align:center;
			grid-column: 0 / 1;
			grid-row: 2 / 3;
		}
	}
</style>