<script setup>
	import {ref, onMounted} from 'vue';
	const isLoaded = ref(false);
	onMounted(()=> {
		document.onreadystatechange = () => {
			if(document.readyState == "complete") {
				isLoaded.value = true;
			}
		}
	});
</script>
<template>
	<div class="loading" v-if="!isLoaded"><img class="rotate" src="/favicon.png" alt="logo"></div>
	<section class="wrapper container" v-else>
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
		<main>
			<h2>Recently Uploaded Blogs:</h2>
			<div class="recentBlog">
				<div v-for="i in [5,4,3,2,1]" v-bind:key={i} class="blogCard">
					<img src="../assets/sampleBlogImage.png">
					<h1>Lorem Ipsum dolor sit amet consectetur</h1>
					<p>Esse ipsam velit nihil eos nam, odio harum, quae quidem amet sunt facere vel non eligendi minima laborum assumenda soluta hic porro.</p>
				</div>
			</div>
		</main>
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
		color: var(--main-color);
	}
	.blogHeroInfo article p {
		font-size:1.25rem;
		margin-bottom:12px;
	}
	.blogHeroInfo article button {
/*		background-color:white;*/
/*		color:var(--matte-black);*/
/*		border:4px solid transparent;*/
		font-size:1.5rem;
		padding:20px 40px;
		font-weight: bold;
		background-color: transparent;
		color: white;
		border:4px solid var(--main-color);
	}
	.blogHeroInfo article button:hover {
		background-color: var(--main-color);
		color:white;
	}
	.blogHeroInfo article button:active {
		/*background-color: transparent;
		color: white;
		border:4px solid var(--main-color);*/

		background-color:white;
		color:var(--matte-black);
		border:4px solid transparent;
	}
	main {
		padding: 24px 48px;
	}
	main h2 {
		font-size:2rem;
		margin-bottom:24px;
	}
	.recentBlog {
		display:grid;
		grid-template-columns: repeat(auto-fit,minmax(350px,1fr));
		gap:24px;
	}
	.blogCard img {
		width:100%;
		height:250px;
		object-fit:cover;
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
	.loading {
		position:absolute;
		height:100%;
		width:100%;
		background-color:lightgray;
		display:flex;
		justify-content:center;
		align-items:center;
		z-index:999;
	}
	.rotate {
	  animation: rotation 2s infinite linear;
	}
	@media (max-width:600px) {
		.recentBlog {
			grid-template-columns:1fr;
		}
		main {
			padding: 12px 3vw;
		}
		.blogCard img {
			height:calc(225px);
		}
	}
	@keyframes rotation {
	  from {
	    transform: rotate(0deg);
	  }
	  to {
	    transform: rotate(359deg);
	  }
	}
</style>